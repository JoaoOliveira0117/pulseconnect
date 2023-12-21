import { Dispatch } from '@reduxjs/toolkit';
import {
	createPost,
	dislikePost,
	likePost,
	repostPost,
	setLoadingTrendingPosts,
	setTrendingPosts,
	unrepostPost,
} from '../reducers/trendingPosts.reducer';
import { setLoadingPersonalPosts, setPersonalPosts } from '../reducers/personalPosts.reducer';
import {
	createPost as createPostAPI,
	getPosts,
	likePost as likePostAPI,
	repostPost as repostPostAPI,
	removeLikePost,
	removeRepostPost,
	getPersonalPosts,
} from '@/services/posts';
import { CreatePostProps, PostInteractionProps } from '@/services/types/posts.types';

const getTrendingPostsAction = (cookie?: string) => async (dispatch: Dispatch) => {
	dispatch(setLoadingTrendingPosts(true));
	try {
		const { data, errors } = await getPosts(cookie);
		if (errors) {
			throw errors;
		}
		return await dispatch(setTrendingPosts(data));
	} catch (err) {
		dispatch(setTrendingPosts([]));
		return err;
	} finally {
		dispatch(setLoadingTrendingPosts(false));
	}
};

const getPersonalPostsAction = (cookie?: string) => async (dispatch: Dispatch) => {
	dispatch(setLoadingPersonalPosts(true));
	try {
		const { data, errors } = await getPersonalPosts(cookie);
		if (errors) {
			throw errors;
		}
		return await dispatch(setPersonalPosts(data));
	} catch (err) {
		dispatch(setPersonalPosts([]));
		return err;
	} finally {
		dispatch(setLoadingPersonalPosts(false));
	}
};

const createPostAction = (body: CreatePostProps, cookie?: string) => async (dispatch: Dispatch) => {
	dispatch(setLoadingTrendingPosts(true));
	try {
		const { data, errors } = await createPostAPI(body, cookie);

		if (errors) {
			throw errors;
		}

		return await dispatch(createPost(data));
	} catch (err) {
		return err;
	} finally {
		dispatch(setLoadingTrendingPosts(false));
	}
};

const likePostAction = (query: PostInteractionProps, cookie?: string) => async (dispatch: Dispatch) => {
	dispatch(setLoadingTrendingPosts(true));
	try {
		const { errors } = await likePostAPI(query, cookie);

		if (errors) {
			throw errors;
		}

		return await dispatch(likePost(query.id));
	} catch (err) {
		return err;
	} finally {
		dispatch(setLoadingTrendingPosts(false));
	}
};

const repostPostAction = (query: PostInteractionProps, cookie?: string) => async (dispatch: Dispatch) => {
	dispatch(setLoadingTrendingPosts(true));
	try {
		const { errors } = await repostPostAPI(query, cookie);
		if (errors) {
			throw errors;
		}

		return await dispatch(repostPost(query.id));
	} catch (err) {
		return err;
	} finally {
		dispatch(setLoadingTrendingPosts(false));
	}
};

const removeLikePostAction = (query: PostInteractionProps, cookie?: string) => async (dispatch: Dispatch) => {
	dispatch(setLoadingTrendingPosts(true));
	try {
		const { errors } = await removeLikePost(query, cookie);

		if (errors) {
			throw errors;
		}

		return await dispatch(dislikePost(query.id));
	} catch (err) {
		return err;
	} finally {
		dispatch(setLoadingTrendingPosts(false));
	}
};

const removeRepostPostAction = (query: PostInteractionProps, cookie?: string) => async (dispatch: Dispatch) => {
	dispatch(setLoadingTrendingPosts(true));
	try {
		const { errors } = await removeRepostPost(query, cookie);

		if (errors) {
			throw errors;
		}

		return await dispatch(unrepostPost(query.id));
	} catch (err) {
		return err;
	} finally {
		dispatch(setLoadingTrendingPosts(false));
	}
};

export {
	getTrendingPostsAction,
	getPersonalPostsAction,
	createPostAction,
	likePostAction,
	repostPostAction,
	removeLikePostAction,
	removeRepostPostAction,
};
