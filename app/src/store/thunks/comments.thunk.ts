import { Dispatch } from '@reduxjs/toolkit';
import { CreatePostProps } from '@/services/types/posts.types';
import { setLoadingTrendingPosts } from '../reducers/trendingPosts.reducer';
import { createPost, getPostById } from '@/services/posts';
import { setComment, setLoadingComment, addReply } from '../reducers/comment.reducer';

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
	dispatch(setLoadingTrendingPosts(true));
	try {
		const { data, errors } = await createPost(body, cookie, replyId);

		if (errors) {
			throw errors;
		}

		dispatch(addReply(data));
	} catch (err) {
		return err;
	} finally {
		dispatch(setLoadingTrendingPosts(false));
	}
};

export { getCommentsAction, createCommentAction };
