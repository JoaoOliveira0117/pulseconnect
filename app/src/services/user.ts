import { get, post } from './api/config';
import getHeaders from '@/utils/getHeaders';

const endpoint = '/users';

export const getUserMe = async (cookie?: string) => {
	try {
		const headers = getHeaders(cookie)
		return await get(`${endpoint}/me`, { headers });
	} catch (error: any) {
		return error;
	}
};

export const getUser = async (id: string, cookie?: string) => {
	try {
		const headers = getHeaders(cookie)
		return await get(`${endpoint}/${id}`, { headers });
	} catch (error: any) {
		return error;
	}
}

export const postUserProfilePicture = async (file: FormData, cookie?: string) => {
	try {
		const headers = {...getHeaders(cookie), 'Content-Type': 'multipart/form-data' }
		return await post(`${endpoint}/update`, file,{ headers });
	} catch (error: any) {
		return error;
	}
}