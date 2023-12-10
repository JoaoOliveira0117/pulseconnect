import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useAppDispatch } from '@/hooks/useRedux';
import { getUserMeAction } from '@/store/thunks/userMe.thunk';
import UserImage from '../Dummies/UserImage';
import { UserType } from '@/types';

interface UserPillProps {
	user?: UserType;
	userToken?: string;
}

export default function UserPill({ user, userToken }: UserPillProps) {
	const router = useRouter();
	const dispatch = useAppDispatch();

	useEffect(() => {
		dispatch(getUserMeAction(userToken));
		router.refresh();
	}, [dispatch, userToken, router]);

	if (!user) return null;

	return (
		<div
			className="flex items-center justify-between cursor-pointer gap-2 p-2 px-4
    hover:bg-bgsecondary rounded-full transition ease-out bg-bgprimary duration-200"
		>
			<UserImage src={user.profilePicture || ''} size={24} />
			<h2 className="block w-full max-w-[8rem] overflow-hidden overflow-ellipsis whitespace-nowrap text-sm font-light text-end">
				@{user.username}
			</h2>
		</div>
	);
}
