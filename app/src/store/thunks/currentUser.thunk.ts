import users from '@/services/users';
import { setCurrentUser, setFetchingCurrentUser, setLoadingCurrentUser } from '../reducers/currentUser.reducers';
import { UserType } from '@/types';

import dispatchHelper from '@/utils/dispatchHelper';

export const getCurrentUser = dispatchHelper(
	async (dispatch) => {
		const { data } = await users.getCurrent();

		dispatch(setCurrentUser(data));
	},
	setLoadingCurrentUser,
	setFetchingCurrentUser,
);

export const removeCurrentUser = dispatchHelper(async (dispatch) => {
	dispatch(setCurrentUser(null));
}, setLoadingCurrentUser);

export const updateCurrentUser = dispatchHelper(
	async (dispatch, body: UserType & { file: FormData }) => {
		const { data } = await users.update(body);

		dispatch(setCurrentUser(data));
	},
	setLoadingCurrentUser,
	setFetchingCurrentUser,
);
