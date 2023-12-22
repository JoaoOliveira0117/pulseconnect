import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { InitialStateType, PostType } from '@/types';

const initialState: InitialStateType<PostType & { replies: PostType[] }> = {
	loading: false,
	data: {} as PostType & { replies: PostType[] },
};

const reducers = {
	setComment: (
		state: InitialStateType<PostType & { replies: PostType[] }>,
		action: PayloadAction<PostType & { replies: PostType[] }>,
	) => {
		state.data = action.payload;
	},
	setReplies: (state: InitialStateType<PostType & { replies: PostType[] }>, action: PayloadAction<PostType[]>) => {
		state.data.replies = action.payload;
	},
	addReply: (state: InitialStateType<PostType & { replies: PostType[] }>, action: PayloadAction<PostType>) => {
		state.data.replies.push(action.payload);
	},
	likeReply: (state: InitialStateType<PostType & { replies: PostType[] }>, action: PayloadAction<string>) => {
		const replyIndex = state.data.replies.findIndex((p) => p.id === action.payload);
		state.data.replies[replyIndex].currentUserHasLiked = true;
		state.data.replies[replyIndex].likes = Number(state.data.replies[replyIndex].likes) + 1;
	},
	dislikeReply: (state: InitialStateType<PostType & { replies: PostType[] }>, action: PayloadAction<string>) => {
		const replyIndex = state.data.replies.findIndex((p) => p.id === action.payload);
		state.data.replies[replyIndex].currentUserHasLiked = false;
		state.data.replies[replyIndex].likes = Number(state.data.replies[replyIndex].likes) - 1;
	},
	repostReply: (state: InitialStateType<PostType & { replies: PostType[] }>, action: PayloadAction<string>) => {
		const replyIndex = state.data.replies.findIndex((p) => p.id === action.payload);
		state.data.replies[replyIndex].currentUserHasReposted = true;
		state.data.replies[replyIndex].reposts = Number(state.data.replies[replyIndex].reposts) + 1;
	},
	unrepostReply: (state: InitialStateType<PostType & { replies: PostType[] }>, action: PayloadAction<string>) => {
		const replyIndex = state.data.replies.findIndex((p) => p.id === action.payload);
		state.data.replies[replyIndex].currentUserHasReposted = false;
		state.data.replies[replyIndex].reposts = Number(state.data.replies[replyIndex].reposts) - 1;
	},
	setLoadingComment: (state: InitialStateType<PostType>, action: PayloadAction<boolean>) => {
		state.loading = action.payload;
	},
};

const commentSlice = createSlice({
	name: 'comment',
	initialState,
	reducers,
});

export const {
	setComment,
	setLoadingComment,
	setReplies,
	addReply,
	likeReply,
	dislikeReply,
	repostReply,
	unrepostReply,
} = commentSlice.actions;

export default commentSlice.reducer;
