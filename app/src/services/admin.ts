import { post } from './api/config';
import { LoginProps, RegisterProps } from './types/admin.types';

const endpoint = '/users';

export const login = async (body: LoginProps) => {
	try {
		return await post(`${endpoint}/login`, body);
	} catch (error: any) {
		return error;
	}
};

export const register = async (body: RegisterProps) => {
	try {
		return await post(`${endpoint}`, body);
	} catch (error: any) {
		return error;
	}
};
