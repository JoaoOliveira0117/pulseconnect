import { setAccessToken } from '@/store/reducers/auth.reducers';
import { useAppDispatch, useAppSelector } from './useRedux';
import getAuth from '@/utils/getAuth';

export default function useAuth() {
	const appToken = useAppSelector((state) => state.auth.data.accessToken);
	const accessToken = getAuth(appToken);

	const dispatch = useAppDispatch();

	const dispatchAccessToken = (token: string) => dispatch(setAccessToken(token));

	return { accessToken, dispatchAccessToken };
}
