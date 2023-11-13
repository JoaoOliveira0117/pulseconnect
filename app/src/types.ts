export type InitialStateType<T> = {
  loading: boolean
  data: T
}

export type UserType = {
  id: string,
	name: string,
	username: string,
	email: string,
	profilePicture?: string
}

export type PostType = {
  id: string;
  user: UserType;
  content: string;
  createdAt: string;
  likes: number;
  comments: number;
  reposts: number;
  currentUserHasLiked: boolean;
  currentUserHasReposted: boolean;
  image?: string;
  video?: string;
  replyTo?: {
    id: string;
    user: UserType;
  };
};
