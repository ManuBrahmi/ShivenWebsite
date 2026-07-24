export interface SocialChannel {
  id: 'instagram' | 'facebook' | 'youtube';
  title: string;
  subtitle: string;
  icon: string;
  bgGradient: string;
  url: string;
  handle: string;
  followers: string;
  recentPosts?: {
    title: string;
    description: string;
    type: string;
    time: string;
    likes?: string;
  }[];
}

