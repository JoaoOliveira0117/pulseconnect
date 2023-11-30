import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { InitialStateType, PostType } from "@/types";

const initialState: InitialStateType<PostType[]> = {
	loading: false,
	data: [] as PostType[]
}

const reducers = {
	setPosts: (state: InitialStateType<PostType[]>, action: PayloadAction<PostType[]>) => {
		state.data = action.payload
	},
	addPost: (state: InitialStateType<PostType[]>, action: PayloadAction<PostType>) => {
		state.data = [action.payload, ...state.data]
	},
	createPost: (state: InitialStateType<PostType[]>, action: PayloadAction<PostType>) => {
		state.data = [action.payload, ...state.data]
	},
	likePost: (state: InitialStateType<PostType[]>, action: PayloadAction<string>) => {
		const postIndex = state.data.findIndex(p => p.id === action.payload);
		state.data[postIndex].currentUserHasLiked = true;
		state.data[postIndex].likes = Number(state.data[postIndex].likes) + 1;
	},
	dislikePost: (state: InitialStateType<PostType[]>, action: PayloadAction<string>) => {
		const postIndex = state.data.findIndex(p => p.id === action.payload);
		state.data[postIndex].currentUserHasLiked = false;
		state.data[postIndex].likes = Number(state.data[postIndex].likes) - 1;
	},
	repostPost: (state: InitialStateType<PostType[]>, action: PayloadAction<string>) => {
		const postIndex = state.data.findIndex(p => p.id === action.payload);
		state.data[postIndex].currentUserHasReposted = true;
		state.data[postIndex].reposts = Number(state.data[postIndex].reposts) + 1;
	},
	unrepostPost: (state: InitialStateType<PostType[]>, action: PayloadAction<string>) => {
		const postIndex = state.data.findIndex(p => p.id === action.payload);
		state.data[postIndex].currentUserHasReposted = false;
		state.data[postIndex].reposts = Number(state.data[postIndex].reposts) - 1;
	},
	setLoadingPosts: (state: InitialStateType<PostType[]>, action: PayloadAction<boolean>) => {
		state.loading = action.payload
	}
}

const postsSlice = createSlice({
	name: 'posts',
	initialState,
	reducers
})

export const { 
	setPosts, 
	addPost, 
	setLoadingPosts, 
	likePost, 
	repostPost, 
	dislikePost, 
	unrepostPost, 
	createPost 
} = postsSlice.actions

export default postsSlice.reducer