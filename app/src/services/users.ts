import { UserType } from '@/types';

import getAuth from '@/utils/getAuth';
import init from './api';

const api = init('users').addHeaders({ Authorization: getAuth() });

const users = {
	getCurrent: () => api.get<UserType>('/me', { cache: 'no-cache' }),
	getById: (id: string) => api.get<UserType>(`/${id}`),
	update: (body: FormData) =>
		api.post<UserType>('/update', {
			body,
		}),
};

export default users;
