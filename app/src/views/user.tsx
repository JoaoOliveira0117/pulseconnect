'use client';

import { useParams } from 'next/navigation';
import User from '@/components/User';
import { useCallback, useEffect, useState } from 'react';
import { UserType } from '@/types';
import useToast from '@/hooks/useToast';
import { users } from '@/services';
import { useAppSelector } from '@/hooks/useRedux';
import UserMe from '@/components/UserMe';

export default function UserView() {
	const userMe = useAppSelector((state) => state.currentUser.data);
	const [user, setUser] = useState<UserType | null>(null);

	const router = useParams();
	const toast = useToast();

	const getUserById = useCallback(async () => {
		const { data, errors } = await users.getById(router.id as string);

		if (errors?.length) {
			return toast(errors, 'error');
		}

		setUser(data);
	}, []);

	useEffect(() => {
		getUserById();
	}, []);

	if (!user) {
		return <></>;
	}

	if (user.id === userMe?.id) {
		return <UserMe />;
	}

	return <User user={user} />;
}
