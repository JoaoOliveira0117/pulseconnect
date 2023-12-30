import { UserType } from '@/types';

import api from './api';
import getAuth from '@/utils/getAuth';

const instance = api('users').addHeaders({ Authorization: getAuth() });

const headers = {
	'Content-Type': 'multipart/form-data',
};

const users = {
	getCurrent: () => instance.get<UserType>('/me'),
	getById: (id: string) => instance.get<UserType>(`/${id}`),
	update: (body: FormData) => instance.post<UserType>('/update', { body, headers }),
};

export default users;
