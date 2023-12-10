'use client';

import UserMe from '@/components/UserMe';
import { useAppSelector } from '@/hooks/useRedux';

interface UserMeProps {
	userToken?: string;
}

export default function UserMeView({ userToken }: UserMeProps) {
	const user = useAppSelector((state) => state.userMe.data);

	return <UserMe userToken={userToken} user={user} />;
}
