'use client';

import { useParams } from 'next/navigation';
import UserView from '@/components/UserView';
import { getUser } from '@/services/user';
import { useCallback, useEffect, useState } from 'react';
import { UserType } from '@/types';
import useToast from '@/hooks/useToast';

interface UserProps {
	userToken?: string;
}

export default function User({ userToken }: UserProps) {
	const [user, setUser] = useState<UserType | null>(null);

	const router = useParams();
	const toast = useToast();

	const getUserById = useCallback(async () => {
		try {
			const { data, errors } = await getUser(router.id as string);
			if (errors) {
				throw new Error(errors.msg[0].map(({ msg }) => msg));
			}
			setUser(data);
		} catch (error) {
			const err = error as Error;
			toast(err.message, 'error');
		}
	}, []);

	useEffect(() => {
		getUserById();
	}, []);

	return <>{user ? <UserView userToken={userToken} user={user} isUserMe={false} /> : <></>}</>;
}
