'use client';

import { useParams } from 'next/navigation';
import User from '@/components/User';
import { getUser } from '@/services/user';
import { useCallback, useEffect, useState } from 'react';
import { UserType } from '@/types';
import useToast from '@/hooks/useToast';

export default function UserView() {
	const [user, setUser] = useState<UserType | null>(null);

	const router = useParams();
	const toast = useToast();

	const getUserById = useCallback(async () => {
		const { data, errors } = await getUser(router.id as string);

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

	return <User user={user} />;
}
