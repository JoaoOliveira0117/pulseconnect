import { UserType } from '@/types';

import api from './api';
import getAuth from '@/utils/getAuth';

const instance = api('users').addHeaders({ Authorization: getAuth() });

const users = {
	getCurrent: () => instance.get<UserType>('/me'),
	getById: (id: string) => instance.get<UserType>(`/${id}`),
	update: (body: UserType & { file: FormData }) => instance.post<UserType>('/update', { body }),
};

export default users;
