'use client';

import UserView from '@/components/UserView';
import { useAppSelector } from '@/hooks/useRedux';

interface UserMeProps {
	userToken?: string;
}

export default function UserMe({ userToken }: UserMeProps) {
	const user = useAppSelector((state) => state.userMe.data);

	return <UserView userToken={userToken} user={user} isUserMe />;
}
