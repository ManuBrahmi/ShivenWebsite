import { SocialChannel } from '../types';

export const socialChannels: SocialChannel[] = [
  {
    id: 'instagram',
    title: 'Instagram',
    subtitle: 'Daily English Tips',
    icon: 'photo_camera',
    bgGradient: 'from-pink-500 to-orange-400',
    url: 'https://www.instagram.com/learn_english_with_shiven/',
    handle: '@learnenglishwithshiven',
    followers: '125K Followers',
    recentPosts: [
      {
        title: '5 Ways to Say "I am Busy" Like a Native Speaker',
        description: 'Stop saying "I am very busy". Try using "I am swamped" or "My hands are full".',
        type: 'Reel • 1 min',
        time: '3 hours ago',
        likes: '14.2K'
      },
      {
        title: 'Common Pronunciation Mistake: "Receipt"',
        description: 'The letter "p" is silent! Pronounce it as /rɪˈsiːt/ (re-seet).',
        type: 'Carousel • 5 Slides',
        time: '1 day ago',
        likes: '18.9K'
      },
      {
        title: '3 Idioms for Workplace Success',
        description: '1. Hit the nail on the head\n2. Touch base\n3. Back to the drawing board',
        type: 'Reel • 45s',
        time: '2 days ago',
        likes: '22.1K'
      }
    ]
  },
  {
    id: 'facebook',
    title: 'Facebook',
    subtitle: 'Community Updates',
    icon: 'groups',
    bgGradient: 'bg-blue-600',
    url: 'https://www.facebook.com/share/1DRn4rw1UE/?mibextid=wwXIfr',
    handle: 'Learn English with Shiven Community',
    followers: '85K Members',
    recentPosts: [
      {
        title: 'Weekly Live Q&A Announcement',
        description: 'Join us this Sunday at 6 PM IST for a live session on "Overcoming Fear of Speaking English in Public"!',
        type: 'Community Announcement',
        time: '5 hours ago',
        likes: '3.4K'
      },
      {
        title: 'Daily Speaking Challenge #14',
        description: 'Record a 30-second audio introducing your favorite hobby in English and post it in the comments below!',
        type: 'Interactive Thread',
        time: '1 day ago',
        likes: '5.1K'
      },
      {
        title: 'Grammar Quiz Poll: Present Perfect vs Past Simple',
        description: 'Which is correct? "I have seen him yesterday" OR "I saw him yesterday"? Cast your vote!',
        type: 'Poll',
        time: '3 days ago',
        likes: '8.7K'
      }
    ]
  },
  {
    id: 'youtube',
    title: 'YouTube',
    subtitle: 'Free Video Lessons',
    icon: 'play_arrow',
    bgGradient: 'bg-red-600',
    url: 'https://www.youtube.com/@EnglishWithShiven',
    handle: 'Learn English with Shiven',
    followers: '310K Subscribers',
    recentPosts: [
      {
        title: 'Master Spoken English in 30 Days | Step-by-Step Roadmap',
        description: 'Complete masterclass on how to build confidence, think directly in English without translating in your head, and speak fluently.',
        type: 'Full Lesson • 18:45',
        time: '2 days ago',
        likes: '45K'
      },
      {
        title: 'Stop Saying "VERY"! 50 Advanced Vocabulary Substitutes',
        description: 'Replace "very tired" with "exhausted", "very cold" with "freezing", and "very smart" with "brilliant".',
        type: 'Video • 12:20',
        time: '5 days ago',
        likes: '62K'
      },
      {
        title: '10 English Mistakes All Beginners Make & How to Fix Them',
        description: 'Learn the difference between "affect" and "effect", "then" and "than", and how to use prepositions correctly.',
        type: 'Masterclass • 22:10',
        time: '1 week ago',
        likes: '89K'
      }
    ]
  }
];
