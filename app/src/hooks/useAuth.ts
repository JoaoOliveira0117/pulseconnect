import { setAccessToken } from '@/store/reducers/auth.reducer';
import { useAppDispatch, useAppSelector } from './useRedux';
import getAuth from '@/utils/getAuth';

function getCurrentToken() {
	const currentToken = getAuth();

	if (!currentToken) {
		return useAppSelector((state) => state.auth.data.accessToken);
	}

	return currentToken;
}

export default function useAuth() {
	const accessToken = getCurrentToken();

	const dispatch = useAppDispatch();

	const dispatchAccessToken = (token: string) => dispatch(setAccessToken(token));

	return { accessToken, dispatchAccessToken };
}
