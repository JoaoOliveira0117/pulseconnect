import { setAccessToken as setAccessTokenReducer } from '@/store/reducers/auth.reducers';
import { useAppDispatch, useAppSelector } from './useRedux';
import { useEffect, useState } from 'react';
import { removeCurrentUser } from '@/store/thunks/currentUser.thunk';
import { useRouter } from 'next/navigation';
import getAuth from '@/utils/getAuth';
import Cookies from 'js-cookie';

export default function useAuth() {
	const [accessToken, setAccessToken] = useState('');
	const appToken = useAppSelector((state) => state.auth.data.accessToken);

	const dispatch = useAppDispatch();
	const router = useRouter();

	const dispatchAccessToken = (token: string) => dispatch(setAccessTokenReducer(token));

	const dispatchLogout = () => {
		router.replace('/auth');
		Cookies.remove('jwt');
		removeCurrentUser(dispatch);
		dispatch(setAccessTokenReducer(''));
	};

	useEffect(() => {
		const token = getAuth(appToken) || '';
		setAccessToken(token);
	}, [appToken]);

	return { accessToken, dispatchAccessToken, dispatchLogout };
}
