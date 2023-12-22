import { Dispatch } from '@reduxjs/toolkit';
import { CreatePostProps, PostInteractionProps } from '@/services/types/posts.types';
import { createPost, getPostById, likePost, removeLikePost, removeRepostPost, repostPost } from '@/services/posts';
import {
	setComment,
	setLoadingComment,
	addReply,
	unrepostReply,
	repostReply,
	likeReply,
} from '../reducers/comment.reducer';

const getCommentsAction = (postId: string, cookie?: string) => async (dispatch: Dispatch) => {
	dispatch(setLoadingComment(true));
	try {
		const { data, errors } = await getPostById(postId, cookie);

		if (errors) {
			throw errors;
		}

		dispatch(setComment(data));
	} catch (err) {
		return err;
	} finally {
		dispatch(setLoadingComment(false));
	}
};

const createCommentAction = (body: CreatePostProps, replyId: string, cookie?: string) => async (dispatch: Dispatch) => {
	dispatch(setLoadingComment(true));
	try {
		const { data, errors } = await createPost(body, cookie, replyId);

		if (errors) {
			throw errors;
		}

		dispatch(addReply(data));
	} catch (err) {
		return err;
	} finally {
		dispatch(setLoadingComment(false));
	}
};

const likeReplyAction = (query: PostInteractionProps, cookie?: string) => async (dispatch: Dispatch) => {
	dispatch(setLoadingComment(true));
	try {
		const { errors } = await likePost(query, cookie);

		if (errors) {
			throw errors;
		}

		return await dispatch(likeReply(query.id));
	} catch (err) {
		return err;
	} finally {
		dispatch(setLoadingComment(false));
	}
};

const repostReplyAction = (query: PostInteractionProps, cookie?: string) => async (dispatch: Dispatch) => {
	dispatch(setLoadingComment(true));
	try {
		const { errors } = await repostPost(query, cookie);
		if (errors) {
			throw errors;
		}

		return await dispatch(repostReply(query.id));
	} catch (err) {
		return err;
	} finally {
		dispatch(setLoadingComment(false));
	}
};

const removeLikeReplyAction = (query: PostInteractionProps, cookie?: string) => async (dispatch: Dispatch) => {
	dispatch(setLoadingComment(true));
	try {
		const { errors } = await removeLikePost(query, cookie);

		if (errors) {
			throw errors;
		}

		return await dispatch(repostReply(query.id));
	} catch (err) {
		return err;
	} finally {
		dispatch(setLoadingComment(false));
	}
};

const removeRepostReplyAction = (query: PostInteractionProps, cookie?: string) => async (dispatch: Dispatch) => {
	dispatch(setLoadingComment(true));
	try {
		const { errors } = await removeRepostPost(query, cookie);

		if (errors) {
			throw errors;
		}

		return await dispatch(unrepostReply(query.id));
	} catch (err) {
		return err;
	} finally {
		dispatch(setLoadingComment(false));
	}
};

export {
	getCommentsAction,
	createCommentAction,
	likeReplyAction,
	repostReplyAction,
	removeLikeReplyAction,
	removeRepostReplyAction,
};
