'use client';

import UserMe from '@/components/UserMe';
import { useAppSelector } from '@/hooks/useRedux';

export default function UserMeView() {
	const user = useAppSelector((state) => state.userMe.data);

	return <UserMe user={user} />;
}
