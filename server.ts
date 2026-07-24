import express from "express";
import path from "path";
import { createServer as createViteServer } from "vite";
import { GoogleGenAI } from "@google/genai";
import dotenv from "dotenv";

dotenv.config();

async function startServer() {
  const app = express();
  const PORT = 3000;

  app.use(express.json());

  // Initialize Gemini AI lazily or safely
  const getAi = () => {
    const apiKey = process.env.GEMINI_API_KEY;
    if (!apiKey) {
      throw new Error("GEMINI_API_KEY environment variable is not configured.");
    }
    return new GoogleGenAI({
      apiKey,
      httpOptions: {
        headers: {
          "User-Agent": "aistudio-build",
        },
      },
    });
  };

  // Health check
  app.get("/api/health", (_req, res) => {
    res.json({ status: "ok", app: "Learn English with Shiven" });
  });

  // AI Tutor / Speech & Grammar Practice API
  app.post("/api/ai/chat", async (req, res) => {
    try {
      const { message, topic, userLevel, history } = req.body;
      const ai = getAi();

      const systemInstruction = `You are Shiven, an encouraging, friendly, and expert English teacher for non-native speakers.
Your goal is to help students speak English with confidence.
Current student level: ${userLevel || "Intermediate"}.
Topic: ${topic || "General Spoken English & Confidence"}.

Rules for your responses:
1. Speak in warm, simple, clear, and encouraging English.
2. If the user made any grammar, vocabulary, or pronunciation mistake in their message:
   - Provide a gentle, positive correction section called "💡 Quick Feedback:".
   - Show their original sentence and the better/natural way to say it.
3. Then reply naturally to keep the conversation flowing and ask a warm follow-up question.
4. Keep answers concise (2-4 paragraphs max) so it feels like a real voice or messaging conversation.`;

      const promptMessages = [];
      if (Array.isArray(history) && history.length > 0) {
        history.forEach((h: { role: string; content: string }) => {
          promptMessages.push(`${h.role === "user" ? "Student" : "Shiven"}: ${h.content}`);
        });
      }
      promptMessages.push(`Student: ${message}`);

      const response = await ai.models.generateContent({
        model: "gemini-3.6-flash",
        contents: promptMessages.join("\n"),
        config: {
          systemInstruction,
          temperature: 0.7,
        },
      });

      res.json({ text: response.text });
    } catch (error: any) {
      console.error("Gemini AI Chat Error:", error);
      res.status(500).json({
        error: error.message || "Failed to generate AI tutor response.",
        fallback: "Hello! Keep practicing. Try saying: 'I want to improve my spoken English every day!'"
      });
    }
  });

  // AI Grammar & Sentence Enhancer API
  app.post("/api/ai/enhance", async (req, res) => {
    try {
      const { sentence } = req.body;
      const ai = getAi();

      const response = await ai.models.generateContent({
        model: "gemini-3.6-flash",
        contents: `Analyze this English sentence: "${sentence}".
Provide JSON output containing:
- "corrected": polished natural sentence
- "explanation": simple reason for corrections
- "vocabularyTip": 1 advanced/better synonym or idiom
- "score": score from 1 to 10 for fluency`,
        config: {
          responseMimeType: "application/json",
          temperature: 0.3,
        },
      });

      res.json(JSON.parse(response.text || "{}"));
    } catch (error: any) {
      console.error("Enhance Error:", error);
      res.status(500).json({ error: error.message });
    }
  });

  // Vite middleware setup
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), "dist");
    app.use(express.static(distPath));
    app.get("*", (_req, res) => {
      res.sendFile(path.join(distPath, "index.html"));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on http://0.0.0.0:${PORT}`);
  });
}

startServer();
