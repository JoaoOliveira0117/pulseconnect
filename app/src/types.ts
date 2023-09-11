type PostType = {
  id: string;
  user: {
    name: string;
    username: string;
    avatar: string;
  };
  content: string;
  createdAt: string;
  likes: number;
  comments: number;
  reposts: number;
  liked: boolean;
  reposted: boolean;
  image?: string;
  video?: string;
  replyTo?: {
    id: string;
    user: {
      name: string;
      username: string;
    };
  };
};
