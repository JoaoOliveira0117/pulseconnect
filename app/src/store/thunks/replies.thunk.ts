import { posts } from '@/services';
import { HandleInteraction, PostType } from '@/types';
import {
	addReply,
	handlePostInteraction,
	handleReplyInteraction,
	removeCurrentReply as removeCurrentReplyReducer,
	setFetchingReplies,
	setLoadingReplies,
	setPost,
} from '../reducers/replies.reducers';

import dispatchHelper from '@/utils/dispatchHelper';

export const getReplies = dispatchHelper(
	async (dispatch, id: string) => {
		const { data } = await posts.getById(id);

		dispatch(setPost(data));
	},
	setLoadingReplies,
	setFetchingReplies,
);

export const removeCurrentReply = dispatchHelper(async (dispatch) => {
	dispatch(removeCurrentReplyReducer());
}, setLoadingReplies);

export const createReply = dispatchHelper(async (dispatch, body: PostType, id: string) => {
	const { data } = await posts.createReply(body, id);

	dispatch(addReply(data));
}, setLoadingReplies);

export const interactWithPost = dispatchHelper(async (dispatch, { id, type }: HandleInteraction) => {
	await posts[type](id);

	dispatch(handlePostInteraction(type));
}, setLoadingReplies);

export const interactWithReply = dispatchHelper(async (dispatch, { id, type }: HandleInteraction) => {
	await posts[type](id);

	dispatch(handleReplyInteraction({ id, type }));
}, setLoadingReplies);
