# Learn English with Shiven 🎓

An official landing portal for **Learn English with Shiven**, designed to connect non-native English learners directly to official learning communities across Instagram, Facebook, and YouTube.

---

## 🌟 Features

- **Single-Page Clean Layout**: Focused, minimal design with zero navigation clutter or external API overhead.
- **Full-Length Educator Portrait**: Prominently features Shiven on the left column with subtle glow background effects.
- **Direct Social CTAs**:
  - **Instagram**: Daily English tips & reel updates ([@learn_english_with_shiven](https://www.instagram.com/learn_english_with_shiven/))
  - **Facebook**: Community discussions & updates ([Facebook Group](https://www.facebook.com/share/1DRn4rw1UE/?mibextid=wwXIfr))
  - **YouTube**: In-depth video lessons ([@EnglishWithShiven](https://www.youtube.com/@EnglishWithShiven))
- **Responsive & Modern**: Built with React 18, TypeScript, Tailwind CSS, and Lucide / Material Symbols icons.

---

## 🚀 Local Setup & Installation

Follow these steps to run the website locally on your computer:

### Prerequisites

- [Node.js](https://nodejs.org/) (v18.0.0 or higher recommended)
- `npm` (comes with Node.js)

### Step 1: Clone the Repository

```bash
git clone https://github.com/your-username/learn-english-with-shiven.git
cd learn-english-with-shiven
```

### Step 2: Install Dependencies

```bash
npm install
```

### Step 3: Run the Development Server

```bash
npm run dev
```

Open your browser and navigate to:
```
http://localhost:3000
```

---

## 🏗️ Production Build

To build the application for deployment:

```bash
npm run build
```

To start the production server:

```bash
npm start
```

---

## 🛠️ Project Structure

```
├── public/              # Static public assets
├── src/
│   ├── components/      # UI Layout components (Header, HeroSection)
│   ├── data/            # Social links and metadata configuration
│   ├── App.tsx          # Root application component
│   ├── index.css        # Tailwind CSS imports and global styles
│   ├── main.tsx         # Application entry point
│   └── types.ts         # TypeScript definitions
├── server.ts            # Node Express server with Vite middleware integration
├── package.json         # Project configuration and dependencies
└── README.md            # Documentation
```

---

## 📝 License

Distributed under the MIT License. Feel free to use and adapt for your own learning platforms!
