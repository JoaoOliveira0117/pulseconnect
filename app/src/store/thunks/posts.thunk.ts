import {
	addPost,
	handlePostInteraction,
	setFetchingPosts,
	setLoadingPosts,
	setPosts,
} from '@/store/reducers/posts.reducers';
import { posts } from '@/services';
import { CreatePostType, HandleInteraction } from '@/types';

import dispatchHelper from '@/utils/dispatchHelper';

export const getAllPosts = dispatchHelper(
	async (dispatch) => {
		const { data } = await posts.getAll();

		dispatch(setPosts(data));
	},
	setLoadingPosts,
	setFetchingPosts,
);

export const getInteractedPosts = dispatchHelper(
	async (dispatch) => {
		const { data } = await posts.getAllInteracted();

		dispatch(setPosts(data));
	},
	setLoadingPosts,
	setFetchingPosts,
);

export const createPost = dispatchHelper(async (dispatch, body: CreatePostType) => {
	const { data } = await posts.create(body);

	dispatch(addPost(data));
}, setLoadingPosts);

export const interactWithPost = dispatchHelper(async (dispatch, { id, type }: HandleInteraction) => {
	await posts[type](id);

	dispatch(handlePostInteraction({ id, type }));
}, setLoadingPosts);
