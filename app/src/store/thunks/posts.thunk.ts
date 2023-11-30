import { Dispatch } from '@reduxjs/toolkit';
import {
	createPost,
	dislikePost,
	likePost,
	repostPost,
	setLoadingPosts,
	setPosts,
	unrepostPost,
} from '../reducers/posts.reducer';
import {
	createPost as createPostAPI,
	getPosts,
	likePost as likePostAPI,
	repostPost as repostPostAPI,
	removeLikePost,
	removeRepostPost,
} from '@/services/posts';
import { CreatePostProps, PostInteractionProps } from '@/services/types/posts.types';

const getPostsAction = (cookie?: string) => async (dispatch: Dispatch) => {
	dispatch(setLoadingPosts(true));
	try {
		const { data, errors } = await getPosts(cookie);
		if (errors) {
			throw errors;
		}
		return await dispatch(setPosts(data));
	} catch (err) {
		dispatch(setPosts([]));
		return err;
	} finally {
		dispatch(setLoadingPosts(false));
	}
};

const createPostAction = (body: CreatePostProps, cookie?: string) => async (dispatch: Dispatch) => {
	dispatch(setLoadingPosts(true));
	try {
		const { data, errors } = await createPostAPI(body, cookie);

		if (errors) {
			throw errors;
		}

		return await dispatch(createPost(data));
	} catch (err) {
		return err;
	} finally {
		dispatch(setLoadingPosts(false));
	}
};

const likePostAction = (query: PostInteractionProps, cookie?: string) => async (dispatch: Dispatch) => {
	dispatch(setLoadingPosts(true));
	try {
		const { errors } = await likePostAPI(query, cookie);

		if (errors) {
			throw errors;
		}

		return await dispatch(likePost(query.id));
	} catch (err) {
		return err;
	} finally {
		dispatch(setLoadingPosts(false));
	}
};

const repostPostAction = (query: PostInteractionProps, cookie?: string) => async (dispatch: Dispatch) => {
	dispatch(setLoadingPosts(true));
	try {
		const { errors } = await repostPostAPI(query, cookie);
		if (errors) {
			throw errors;
		}

		return await dispatch(repostPost(query.id));
	} catch (err) {
		return err;
	} finally {
		dispatch(setLoadingPosts(false));
	}
};

const removeLikePostAction = (query: PostInteractionProps, cookie?: string) => async (dispatch: Dispatch) => {
	dispatch(setLoadingPosts(true));
	try {
		const { errors } = await removeLikePost(query, cookie);

		if (errors) {
			throw errors;
		}

		return await dispatch(dislikePost(query.id));
	} catch (err) {
		return err;
	} finally {
		dispatch(setLoadingPosts(false));
	}
};

const removeRepostPostAction = (query: PostInteractionProps, cookie?: string) => async (dispatch: Dispatch) => {
	dispatch(setLoadingPosts(true));
	try {
		const { errors } = await removeRepostPost(query, cookie);

		if (errors) {
			throw errors;
		}

		return await dispatch(unrepostPost(query.id));
	} catch (err) {
		return err;
	} finally {
		dispatch(setLoadingPosts(false));
	}
};

export {
	getPostsAction,
	createPostAction,
	likePostAction,
	repostPostAction,
	removeLikePostAction,
	removeRepostPostAction,
};
