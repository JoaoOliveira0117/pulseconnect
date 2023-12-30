'use client';

import { ReactNode, createContext, useEffect } from 'react';
import useAuth from '@/hooks/useAuth';
import { getCurrentUser } from '@/store/thunks/currentUser.thunk';
import { useAppDispatch } from '@/hooks/useRedux';
import useToast from '@/hooks/useToast';

export const AuthContext = createContext('');
// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const AuthDispatchContext = createContext((_: string) => {});

export default function AuthProvider({ children }: { children: ReactNode }) {
	const { accessToken, dispatchAccessToken } = useAuth();

	const toast = useToast();
	const dispatch = useAppDispatch();

	useEffect(() => {
		if (accessToken) {
			getCurrentUser(dispatch).catch((err) => toast(err.errors, 'error'));
		}
	}, [accessToken]);

	return (
		<AuthContext.Provider value={accessToken}>
			<AuthDispatchContext.Provider value={dispatchAccessToken}>{children}</AuthDispatchContext.Provider>
		</AuthContext.Provider>
	);
}
