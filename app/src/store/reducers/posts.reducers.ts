import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { HandleInteraction, InitialStateType, PostType } from '@/types';

type PostInitialState = InitialStateType<PostType[]>;

const initialState: PostInitialState = {
	loading: false,
	fetching: false,
	data: [],
};

const reducers = {
	setPosts: (state: PostInitialState, { payload }: PayloadAction<PostType[]>) => {
		state.data = payload;
	},
	addPost: (state: PostInitialState, { payload }: PayloadAction<PostType>) => {
		state.data = [payload, ...state.data];
	},
	handlePostInteraction: (state: PostInitialState, { payload }: PayloadAction<HandleInteraction>) => {
		const post = state.data.findIndex((p) => p.id === payload.id);

		switch (payload.type) {
			case 'like':
				state.data[post].currentUserHasLiked = true;
				state.data[post].likes++;
				break;
			case 'repost':
				state.data[post].currentUserHasReposted = true;
				state.data[post].reposts++;
				break;
			case 'dislike':
				state.data[post].currentUserHasLiked = false;
				state.data[post].likes--;
				break;
			case 'disrepost':
				state.data[post].currentUserHasReposted = false;
				state.data[post].reposts--;
				break;
		}
	},
	setLoadingPosts: (state: PostInitialState, { payload }: PayloadAction<boolean>) => {
		state.loading = payload;
	},
	setFetchingPosts: (state: PostInitialState, { payload }: PayloadAction<boolean>) => {
		state.fetching = payload;
	},
};

const postsSlice = createSlice({
	name: 'posts',
	initialState,
	reducers,
});

export const { setPosts, setLoadingPosts, setFetchingPosts, addPost, handlePostInteraction } = postsSlice.actions;

export default postsSlice.reducer;
