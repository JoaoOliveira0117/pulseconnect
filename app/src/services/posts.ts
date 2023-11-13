import { get, post } from './api/config';
import { CreatePostProps, PostInteractionProps } from './types/posts.types';
import getHeaders from '@/utils/getHeaders';

const endpoint = '/posts';

export const getPosts = async (cookie?: string) => {
	try {
		const headers = await getHeaders(cookie)
		return await get(`${endpoint}`, { headers });
	} catch (error: any) {
		return error;
	}
};

export const createPost = async (body: CreatePostProps, cookie?: string) => {
	try {
		const headers = await getHeaders(cookie)
		return await post(`${endpoint}/create`, body, { headers });
	} catch (error: any) {
		return error;
	}
};

export const likePost = async (query: PostInteractionProps, cookie?: string) => {
	try {
		const headers = await getHeaders(cookie)
		return await post(`${endpoint}/like?id=${query.id}`, {}, { headers });
	} catch (error: any) {
		return error;
	}
}

export const repostPost = async (query: PostInteractionProps, cookie?: string) => {
	try {
		const headers = await getHeaders(cookie)
		return await post(`${endpoint}/repost?id=${query.id}`, {}, { headers });
	} catch (error: any) {
		return error;
	}
}