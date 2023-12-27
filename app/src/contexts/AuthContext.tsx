'use client';

import { ReactNode, createContext } from 'react';
import useAuth from '@/hooks/useAuth';

export const AuthContext = createContext('');
// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const AuthDispatchContext = createContext((_: string) => {});

export default function AuthProvider({ children }: { children: ReactNode }) {
	const { accessToken, dispatchAccessToken } = useAuth();

	return (
		<AuthContext.Provider value={accessToken}>
			<AuthDispatchContext.Provider value={dispatchAccessToken}>{children}</AuthDispatchContext.Provider>
		</AuthContext.Provider>
	);
}
