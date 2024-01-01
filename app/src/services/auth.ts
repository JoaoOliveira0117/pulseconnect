import { LoginType, RegisterType, UserType } from '@/types';
import init from './api';

type AuthResponse = {
	token: string;
	user: UserType;
};

const api = init('users');

const auth = {
	login: (body: LoginType) => api.post<AuthResponse>('/login', { body }),
	register: (body: RegisterType) => api.post<AuthResponse>('', { body }),
};

export default auth;
