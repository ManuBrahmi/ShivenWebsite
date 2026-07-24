import { LessonItem } from '../types';

export const lessonsData: LessonItem[] = [
  {
    id: 'spoken-1',
    title: 'Self-Introduction with High Confidence',
    category: 'Spoken English',
    level: 'Beginner',
    duration: '10 mins',
    description: 'Learn the exact 4-step framework to introduce yourself professionally in job interviews, meetings, and social gatherings without hesitating.',
    keyTakeaways: [
      'Hook the listener with your name and passion',
      'Describe your role without dry jargon',
      'Mention 1 key highlight or achievement',
      'Conclude warmly with a call to connect'
    ],
    examples: [
      {
        incorrect: 'My name is Rahul and I am working in IT company since 3 years.',
        correct: 'Hello! I am Rahul. For the past three years, I have been building scalable web software.',
        explanation: 'Use "For the past three years, I have been..." instead of mixing tenses.',
        audioText: 'Hello! I am Rahul. For the past three years, I have been building scalable web software.'
      },
      {
        incorrect: 'Myself Priya from Delhi.',
        correct: 'Hi everyone, I am Priya from Delhi, and I specialize in digital design.',
        explanation: '"Myself Priya" is grammatically incorrect when starting a sentence.',
        audioText: 'Hi everyone, I am Priya from Delhi, and I specialize in digital design.'
      }
    ],
    practiceExercise: {
      prompt: 'Which opening phrase is grammatically correct and sounds most professional in an interview?',
      options: [
        'Myself Rahul, working as a designer.',
        'Hello, I am Rahul. I specialize in product design.',
        'My self is Rahul and designer is my job.',
        'I am Rahul by name and designing things.'
      ],
      correctAnswer: 1,
      explanation: '"Hello, I am Rahul..." is clean, correct, and professional.'
    }
  },
  {
    id: 'spoken-2',
    title: 'Ordering Food & Small Talk at Restaurants',
    category: 'Spoken English',
    level: 'Intermediate',
    duration: '12 mins',
    description: 'Master polite phrases for requesting recommendations, making orders, asking for the bill, and handling special dietary requests effortlessly.',
    keyTakeaways: [
      'Use "Could I please have..." instead of "Give me..."',
      'Ask "What do you recommend?" for staff suggestions',
      'Request the check politely with "Could we get the bill, please?"'
    ],
    examples: [
      {
        incorrect: 'Give me one coffee and sandwich.',
        correct: 'Could I please get an iced Americano and a grilled sandwich?',
        explanation: '"Could I please get..." expresses polite respect in English conversations.',
        audioText: 'Could I please get an iced Americano and a grilled sandwich?'
      }
    ],
    practiceExercise: {
      prompt: 'What is the most polite way to ask the waiter for the bill?',
      options: [
        'Give bill now.',
        'Hey, bring the bill here.',
        'Could we have the bill, please?',
        'I am wanting to pay.'
      ],
      correctAnswer: 2,
      explanation: '"Could we have the bill, please?" is natural and respectful.'
    }
  },
  {
    id: 'grammar-1',
    title: 'Present Perfect vs. Past Simple Masterclass',
    category: 'Grammar',
    level: 'Intermediate',
    duration: '15 mins',
    description: 'Stop getting confused between "I have seen" and "I saw". Learn the rule of specified vs. unspecified past time.',
    keyTakeaways: [
      'Past Simple: Use when specific time is mentioned (yesterday, in 2020, 2 hours ago)',
      'Present Perfect: Use when time is unspecified or connects past experience to now (ever, never, recently, already)'
    ],
    examples: [
      {
        incorrect: 'I have met him yesterday.',
        correct: 'I met him yesterday.',
        explanation: '"Yesterday" is a specific past time marker, so use Past Simple "met".',
        audioText: 'I met him yesterday.'
      },
      {
        incorrect: 'I saw that movie three times already.',
        correct: 'I have seen that movie three times already.',
        explanation: '"Already" indicates an experience connecting to the present moment.',
        audioText: 'I have seen that movie three times already.'
      }
    ],
    practiceExercise: {
      prompt: 'Choose the correct sentence:',
      options: [
        'She has finished her graduation in 2022.',
        'She finished her graduation in 2022.',
        'She was finished her graduation in 2022.',
        'She is finishing her graduation in 2022 yesterday.'
      ],
      correctAnswer: 1,
      explanation: 'Because "in 2022" is a specific past year, Past Simple "finished" is required.'
    }
  },
  {
    id: 'pronunciation-1',
    title: 'Silent Letters in English (B, K, P, W, L)',
    category: 'Pronunciation',
    level: 'Beginner',
    duration: '8 mins',
    description: 'Learn why words like "Doubt", "Knife", "Receipt", and "Salmon" are pronounced differently from their spellings.',
    keyTakeaways: [
      'Doubt: "b" is silent (/daʊt/)',
      'Salmon: "l" is silent (/ˈsæmən/)',
      'Subtle: "b" is silent (/ˈsʌtl/)',
      'Wednesday: "d" is silent (/ˈwɛnzdeɪ/)'
    ],
    examples: [
      {
        incorrect: 'Pronouncing the "L" in Salmon as Sal-mon',
        correct: 'Pronounce it as SAM-un (/ˈsæmən/)',
        explanation: 'The letter L in salmon is completely silent.',
        audioText: 'Please order the grilled salmon for dinner.'
      }
    ],
    practiceExercise: {
      prompt: 'Which word contains a silent letter?',
      options: [
        'Desk',
        'Subtle',
        'Public',
        'Strong'
      ],
      correctAnswer: 1,
      explanation: 'In "Subtle", the letter "b" is completely silent (pronounced sut-tle).'
    }
  },
  {
    id: 'vocab-1',
    title: 'Top 15 Workplace Phrasal Verbs',
    category: 'Vocabulary',
    level: 'Advanced',
    duration: '14 mins',
    description: 'Boost your business English fluency with native phrasal verbs like "Follow up", "Touch base", "Circle back", and "Carry out".',
    keyTakeaways: [
      'Touch base = Briefly connect with someone',
      'Follow up = Check progress on a prior request',
      'Circle back = Return to a topic later'
    ],
    examples: [
      {
        incorrect: 'I will message you later regarding the plan.',
        correct: 'Let us touch base tomorrow morning to finalize the proposal.',
        explanation: '"Touch base" is standard professional idiom in business English.',
        audioText: 'Let us touch base tomorrow morning to finalize the proposal.'
      }
    ],
    practiceExercise: {
      prompt: 'What does "Touch base" mean in a professional setting?',
      options: [
        'Touch the floor of the office',
        'Briefly talk or check in with someone',
        'Cancel a project completely',
        'Hire new staff members'
      ],
      correctAnswer: 1,
      explanation: '"Touch base" means to quickly contact or check in with a colleague.'
    }
  }
];
