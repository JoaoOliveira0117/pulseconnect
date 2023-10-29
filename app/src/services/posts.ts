import { get, post } from './api/config';
import { CreatePostProps } from './types/posts.types';
import getHeaders from '@/utils/getHeaders';

const endpoint = '/posts';

export const getPosts = async () => {
	try {
		const headers = await getHeaders(true)
		return await get(`${endpoint}`, { headers });
	} catch (error: any) {
		return error;
	}
};

export const createPost = async (body: CreatePostProps) => {
	try {
		const headers = await getHeaders(true)
		return await post(`${endpoint}/create`, body, { headers });
	} catch (error: any) {
		return error;
	}
};
