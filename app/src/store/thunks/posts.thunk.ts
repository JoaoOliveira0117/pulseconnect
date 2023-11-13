import {  Dispatch } from "@reduxjs/toolkit";
import { setLoadingPosts, setPosts } from "../reducers/posts.reducer";
import { createPost, getPosts, likePost, removeLikePost, removeRepostPost, repostPost } from "@/services/posts";
import { CreatePostProps, PostInteractionProps } from "@/services/types/posts.types";

const getPostsAction = (cookie?: string) => async (dispatch: Dispatch) => {
	dispatch(setLoadingPosts(true))
	try {
		const { data, errors } = await getPosts(cookie);
		if (errors) {
			throw errors;
		}
		return await dispatch(setPosts(data.posts));
	} catch (err) {
		dispatch(setPosts([]));
		return err
	} finally {
		dispatch(setLoadingPosts(false));
	}
};

const createPostAction = (body: CreatePostProps, cookie?: string) => async (dispatch: Dispatch) => {
	dispatch(setLoadingPosts(true))
	try {
		const { createErrors } = await createPost(body, cookie);

		if (createErrors) {
			throw createErrors;
		}
		
		const { data, getErrors } = await getPosts(cookie);

		if (getErrors) {
			throw getErrors;
		}

		return await dispatch(setPosts(data.posts));
	} catch (err) {
		dispatch(setPosts([]));
		return err
	} finally {
		dispatch(setLoadingPosts(false));
	}
};

const likePostAction = (query: PostInteractionProps, cookie?: string) => async (dispatch: Dispatch) => {
	dispatch(setLoadingPosts(true))
	try {
		const { likeErrors } = await likePost(query, cookie);
		if (likeErrors) {
			throw likeErrors;
		}
		
		const { data, getErrors } = await getPosts(cookie);

		if (getErrors) {
			throw getErrors;
		}

		return await dispatch(setPosts(data.posts));
	} catch (err) {
		return err
	} finally {
		dispatch(setLoadingPosts(false));
	}
}

const repostPostAction = (query: PostInteractionProps, cookie?: string) => async(dispatch: Dispatch) => {
	dispatch(setLoadingPosts(true))
	try {
		const { repostErrors } = await repostPost(query, cookie);
		if (repostErrors) {
			throw repostErrors;
		}
		
		const { data, getErrors } = await getPosts(cookie);

		if (getErrors) {
			throw getErrors;
		}

		return await dispatch(setPosts(data.posts));
	} catch (err) {
		dispatch(setPosts([]));
		return err
	} finally {
		dispatch(setLoadingPosts(false));
	}
}

const removeLikePostAction = (query: PostInteractionProps, cookie?: string) => async (dispatch: Dispatch) => {
	dispatch(setLoadingPosts(true))
	try {
		const { likeErrors } = await removeLikePost(query, cookie);
		if (likeErrors) {
			throw likeErrors;
		}
		
		const { data, getErrors } = await getPosts(cookie);

		if (getErrors) {
			throw getErrors;
		}

		return await dispatch(setPosts(data.posts));
	} catch (err) {
		return err
	} finally {
		dispatch(setLoadingPosts(false));
	}
}

const removeRepostPostAction = (query: PostInteractionProps, cookie?: string) => async(dispatch: Dispatch) => {
	dispatch(setLoadingPosts(true))
	try {
		const { repostErrors } = await removeRepostPost(query, cookie);
		if (repostErrors) {
			throw repostErrors;
		}
		
		const { data, getErrors } = await getPosts(cookie);

		if (getErrors) {
			throw getErrors;
		}

		return await dispatch(setPosts(data.posts));
	} catch (err) {
		dispatch(setPosts([]));
		return err
	} finally {
		dispatch(setLoadingPosts(false));
	}
}

export { getPostsAction, createPostAction, likePostAction, repostPostAction, removeLikePostAction, removeRepostPostAction }