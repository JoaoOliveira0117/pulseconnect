'use client';

import UserMe from '@/components/UserMe';
import { useAppSelector } from '@/hooks/useRedux';

export default function UserMeView() {
	const user = useAppSelector((state) => state.currentUser.data);

	if (!user) {
		return null;
	}

	return <UserMe user={user} />;
}
