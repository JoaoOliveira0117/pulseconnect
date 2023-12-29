import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { HandleInteraction, InitialStateType, Interactions, PostType } from '@/types';

type RepliesInitialState = InitialStateType<{ post: PostType | null; replies: PostType[] }>;

const initialState: RepliesInitialState = {
	loading: false,
	fetching: false,
	data: {
		post: null,
		replies: [],
	},
};

const reducers = {
	setPost: (state: RepliesInitialState, { payload }: PayloadAction<PostType>) => {
		state.data.post = payload;
		state.data.replies = [];
	},
	setReplies: (state: RepliesInitialState, { payload }: PayloadAction<PostType[]>) => {
		state.data.replies = payload;
	},
	addReply: (state: RepliesInitialState, { payload }: PayloadAction<PostType>) => {
		state.data.replies = [...state.data.replies, payload];
	},
	handlePostInteraction: (state: RepliesInitialState, { payload }: PayloadAction<Interactions>) => {
		if (!state.data.post) {
			return;
		}

		switch (payload) {
			case 'like':
				state.data.post.currentUserHasLiked = true;
				state.data.post.likes++;
				break;
			case 'repost':
				state.data.post.currentUserHasReposted = true;
				state.data.post.reposts++;
				break;
			case 'dislike':
				state.data.post.currentUserHasLiked = false;
				state.data.post.likes--;
				break;
			case 'disrepost':
				state.data.post.currentUserHasReposted = false;
				state.data.post.reposts--;
				break;
		}
	},
	handleReplyInteraction: (state: RepliesInitialState, { payload }: PayloadAction<HandleInteraction>) => {
		const post = state.data.replies.findIndex((p) => p.id === payload.id);

		switch (payload.type) {
			case 'like':
				state.data.replies[post].currentUserHasLiked = true;
				state.data.replies[post].likes++;
				break;
			case 'repost':
				state.data.replies[post].currentUserHasReposted = true;
				state.data.replies[post].reposts++;
				break;
			case 'dislike':
				state.data.replies[post].currentUserHasLiked = false;
				state.data.replies[post].likes--;
				break;
			case 'disrepost':
				state.data.replies[post].currentUserHasReposted = false;
				state.data.replies[post].reposts--;
				break;
		}
	},
	removeCurrentReply: (state: RepliesInitialState) => {
		state.data.post = null;
		state.data.replies = [];
	},
	setLoadingReplies: (state: RepliesInitialState, { payload }: PayloadAction<boolean>) => {
		state.loading = payload;
	},
	setFetchingReplies: (state: RepliesInitialState, { payload }: PayloadAction<boolean>) => {
		state.fetching = payload;
	},
};

const repliesSlice = createSlice({
	name: 'replies',
	initialState,
	reducers,
});

export const {
	setPost,
	setReplies,
	addReply,
	setLoadingReplies,
	setFetchingReplies,
	handlePostInteraction,
	handleReplyInteraction,
	removeCurrentReply,
} = repliesSlice.actions;

export default repliesSlice.reducer;
