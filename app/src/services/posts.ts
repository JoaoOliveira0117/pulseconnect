import { APIResponse, PostType } from '@/types';
import { destroy, get, post } from './api/config';
import { CreatePostProps, PostInteractionProps } from './types/posts.types';
import getHeaders from '@/utils/getHeaders';

const endpoint = '/posts';

export const getPosts = async (cookie?: string): Promise<APIResponse<PostType[]>> => {
	try {
		const headers = await getHeaders(cookie);
		return await get(`${endpoint}`, { headers });
	} catch (error) {
		return error as APIResponse<PostType[]>;
	}
};

export const getPostById = async (
	id: string,
	cookie?: string,
): Promise<APIResponse<PostType & { replies: PostType[] }>> => {
	try {
		const headers = await getHeaders(cookie);
		return await get(`${endpoint}/${id}`, { headers });
	} catch (error) {
		return error as APIResponse<PostType & { replies: PostType[] }>;
	}
};

export const getPersonalPosts = async (cookie?: string): Promise<APIResponse<PostType[]>> => {
	try {
		const headers = await getHeaders(cookie);
		return await get(`${endpoint}/interactions`, { headers });
	} catch (error) {
		return error as APIResponse<PostType[]>;
	}
};

export const createPost = async (
	body: CreatePostProps,
	cookie?: string,
	replyId: string = '',
): Promise<APIResponse<PostType>> => {
	try {
		const headers = await getHeaders(cookie);
		return await post(`${endpoint}/create/${replyId}`, body, { headers });
	} catch (error) {
		return error as APIResponse<PostType>;
	}
};

export const likePost = async (query: PostInteractionProps, cookie?: string): Promise<APIResponse<PostType>> => {
	try {
		const headers = await getHeaders(cookie);
		return await post(`${endpoint}/like/${query.id}`, {}, { headers });
	} catch (error) {
		return error as APIResponse<PostType>;
	}
};

export const repostPost = async (query: PostInteractionProps, cookie?: string): Promise<APIResponse<PostType>> => {
	try {
		const headers = await getHeaders(cookie);
		return await post(`${endpoint}/repost/${query.id}`, {}, { headers });
	} catch (error) {
		return error as APIResponse<PostType>;
	}
};

export const removeLikePost = async (
	query: PostInteractionProps,
	cookie?: string,
): Promise<APIResponse<{ deleted: number }>> => {
	try {
		const headers = await getHeaders(cookie);
		return await destroy(`${endpoint}/like/${query.id}`, { headers });
	} catch (error) {
		return error as APIResponse<{ deleted: number }>;
	}
};

export const removeRepostPost = async (
	query: PostInteractionProps,
	cookie?: string,
): Promise<APIResponse<{ deleted: number }>> => {
	try {
		const headers = await getHeaders(cookie);
		return await destroy(`${endpoint}/repost/${query.id}`, { headers });
	} catch (error) {
		return error as APIResponse<{ deleted: number }>;
	}
};
