import { createSlice } from "@reduxjs/toolkit";
import { InitialStateType, PostType } from "@/types";

const initialState: InitialStateType<PostType[]> = {
	loading: false,
	data: [] as PostType[]
}

const reducers = {
	setPosts: (state: InitialStateType<PostType[]>, action: any) => {
		state.data = action.payload
	},
	addPost: (state: InitialStateType<PostType[]>, action: any) => {
		state.data = [action.payload, ...state.data]
	},
	setLoadingPosts: (state: InitialStateType<boolean>, action: any) => {
		state.loading = action.payload
	}
}

const postsSlice = createSlice({
	name: 'posts',
	initialState,
	reducers
})

export const { setPosts, addPost, setLoadingPosts } = postsSlice.actions

export default postsSlice.reducer