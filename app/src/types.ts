export type InitialStateType<T> = {
	loading: boolean;
	fetching: boolean;
	data: T;
};

export type Params = {
	[key: string]: string | number;
};

export type Query = {
	[key: string]: string | number;
};

export type Body = {
	[key: string]: unknown;
};

export type APIResponse<T> = {
	params: Params;
	query: Query;
	body: Body;
	data: T;
	errors?: string[];
	statusCode?: number;
};

export type LoginType = {
	email: string;
	password: string;
};

export type RegisterType = LoginType & {
	username: string;
	name: string;
	confirm_password: string;
};

export type AuthType = {
	accessToken: string;
};

export type UserType = {
	[key: string]: string;
	id: string;
	name: string;
	username: string;
	email: string;
	profilePicture: string;
};

export type CreatePostType = {
	content: string;
};

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

export type Interactions = 'like' | 'dislike' | 'repost' | 'disrepost';

export type HandleInteraction = {
	id: string;
	type: Interactions;
};
