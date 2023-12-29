import { LoginType, RegisterType, UserType } from '@/types';
import api from './api';

type AuthResponse = {
	token: string;
	user: UserType;
};

const instance = api('users');

const auth = {
	login: (body: LoginType) => instance.post<AuthResponse>('login', { body }),
	register: (body: RegisterType) => instance.post<AuthResponse>('', { body }),
};

export default auth;
