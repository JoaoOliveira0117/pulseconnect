import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useAppDispatch, useAppSelector } from '@/hooks/useRedux';
import { getCurrentUser } from '@/store/thunks/currentUser.thunk';
import UserImage from '../Dummies/ProfilePicture';

export default function UserPill() {
	const user = useAppSelector((state) => state.currentUser.data);
	const router = useRouter();
	const dispatch = useAppDispatch();

	useEffect(() => {
		getCurrentUser(dispatch);
		router.refresh();
	}, [dispatch, router]);

	if (!user) {
		return null;
	}

	return (
		<div className="flex items-center justify-between cursor-pointer gap-2 p-2 px-4 hover:bg-bgsecondary rounded-full transition ease-out bg-bgprimary duration-200">
			<UserImage src={user?.profilePicture} size={24} />
			<h2 className="block w-full max-w-[8rem] overflow-hidden overflow-ellipsis whitespace-nowrap text-sm font-light text-end">
				@{user.username}
			</h2>
		</div>
	);
}
