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
	setLoadingComment: (state: InitialStateType<PostType>, action: PayloadAction<boolean>) => {
		state.loading = action.payload;
	},
};

const commentSlice = createSlice({
	name: 'comment',
	initialState,
	reducers,
});

export const { setComment, setLoadingComment, setReplies, addReply } = commentSlice.actions;

export default commentSlice.reducer;
