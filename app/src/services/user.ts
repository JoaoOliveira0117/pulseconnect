import { APIResponse, UserType } from '@/types';
import { get, post } from './api/config';
import getHeaders from '@/utils/getHeaders';

const endpoint = '/users';

export const getUserMe = async (cookie?: string): Promise<APIResponse<UserType>> => {
	try {
		const headers = getHeaders(cookie);
		return await get(`${endpoint}/me`, { headers });
	} catch (error) {
		return error as APIResponse<UserType>;
	}
};

export const getUser = async (id: string, cookie?: string): Promise<APIResponse<UserType>> => {
	try {
		const headers = getHeaders(cookie);
		return await get(`${endpoint}/${id}`, { headers });
	} catch (error) {
		return error as APIResponse<UserType>;
	}
};

export const postUserProfilePicture = async (file: FormData, cookie?: string): Promise<APIResponse<object>> => {
	try {
		const headers = { ...getHeaders(cookie), 'Content-Type': 'multipart/form-data' };
		return await post(`${endpoint}/update`, file, { headers });
	} catch (error) {
		return error as APIResponse<object>;
	}
};
