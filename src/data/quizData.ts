import { QuizQuestion } from '../types';

export const quizQuestions: QuizQuestion[] = [
  {
    id: 1,
    question: 'Select the sentence with correct English grammar:',
    options: [
      'I am living in Delhi since 2018.',
      'I have been living in Delhi since 2018.',
      'I lived in Delhi from 2018 since now.',
      'I was living in Delhi since 2018.'
    ],
    correctIndex: 1,
    explanation: 'When an action started in the past and continues into the present, use the Present Perfect Continuous tense ("have been living... since 2018").',
    category: 'Grammar'
  },
  {
    id: 2,
    question: 'What is the correct pronunciation of the word "VEGETABLE"?',
    options: [
      'Ve-ge-ta-ble (4 syllables)',
      'VEG-tuh-bul (3 syllables)',
      'Vee-gee-tay-bull (4 syllables)',
      'Veggie-table (3 syllables)'
    ],
    correctIndex: 1,
    explanation: '"Vegetable" is pronounced with 3 syllables as VEG-tuh-bul (/ˈvɛdʒtəbəl/). The second "e" is silent.',
    category: 'Pronunciation'
  },
  {
    id: 3,
    question: 'Which word is a better, more natural synonym for "VERY COLD"?',
    options: [
      'Freezing',
      'Chillingly',
      'Colder',
      'Iceyish'
    ],
    correctIndex: 0,
    explanation: '"Freezing" is the precise advanced adjective for "very cold".',
    category: 'Vocabulary'
  },
  {
    id: 4,
    question: 'Choose the polite way to ask for help in an office environment:',
    options: [
      'Do my work now.',
      'Could you please give me a hand with this report?',
      'You must assist me immediately.',
      'I am needing help.'
    ],
    correctIndex: 1,
    explanation: '"Could you please give me a hand..." uses polite modal verbs ("could") and a natural idiom ("give a hand").',
    category: 'Spoken English'
  },
  {
    id: 5,
    question: 'Which sentence correctly uses "AFFECT" vs "EFFECT"?',
    options: [
      'Lack of sleep will affect your focus.',
      'Lack of sleep will effect your focus.',
      'The affect of the medication was immediate.',
      'This rule does not affect to me.'
    ],
    correctIndex: 0,
    explanation: '"Affect" is usually a verb meaning "to influence". "Effect" is usually a noun meaning "the result".',
    category: 'Grammar'
  }
];
