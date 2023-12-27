export type InitialStateType<T> = {
	loading: boolean;
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

export type AuthType = {
	accessToken: string;
};

export type UserType = {
	id: string;
	name: string;
	username: string;
	email: string;
	profilePicture?: string;
};

export type PostType = {
	id: string;
	user: UserType;
	content: string;
	createdAt: string;
	likes: string | number;
	comments: number;
	reposts: string | number;
	currentUserHasLiked: boolean;
	currentUserHasReposted: boolean;
	image?: string;
	video?: string;
	replyTo?: {
		id: string;
		user: UserType;
	};
};
