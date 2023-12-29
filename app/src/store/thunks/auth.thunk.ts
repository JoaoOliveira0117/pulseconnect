import { LoginType, RegisterType } from '@/types';
import { setAccessToken, setFetchingAuth, setLoadingAuth } from '@/store/reducers/auth.reducers';
import { setLoadingCurrentUser, setCurrentUser, setFetchingCurrentUser } from '@/store/reducers/currentUser.reducers';

import dispatchHelper from '@/utils/dispatchHelper';
import auth from '@/services/auth';

export const authenticateUser = dispatchHelper(
	async (dispatch, user: LoginType) => {
		const { data } = await auth.login(user);

		dispatch(setAccessToken(data.token));
		dispatch(setCurrentUser(data.user));
	},
	(loading) => {
		setLoadingAuth(loading);
		return setLoadingCurrentUser(loading);
	},
	(fetching) => {
		setFetchingAuth(fetching);
		return setFetchingCurrentUser(fetching);
	},
);

export const registerUser = dispatchHelper(
	async (dispatch, user: RegisterType) => {
		const { data } = await auth.register(user);

		dispatch(setAccessToken(data.token));
		dispatch(setCurrentUser(data.user));
	},
	(loading) => {
		setLoadingAuth(loading);
		return setLoadingCurrentUser(loading);
	},
	(fetching) => {
		setFetchingAuth(fetching);
		return setFetchingCurrentUser(fetching);
	},
);
