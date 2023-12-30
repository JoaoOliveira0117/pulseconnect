'use client';

import Link from 'next/link';
import useAuth from '@/hooks/useAuth';
import { useAppSelector } from '@/hooks/useRedux';
import UserMeProfilePicture from '../Dummies/UserMeProfilePicture';
import DropdownItem from '../DropdownMenu/dropdownItem';
import DropdownMenu from '../DropdownMenu';
import UserPill from '../UserPill';

const defaults = 'w-full p-2 text-center hover:bg-secondary outline-none rounded-lg transition-all duration-150';

export default function UserDropdown() {
	const { dispatchLogout } = useAuth();
	const isLoading = useAppSelector((state) => state.currentUser.fetching || state.currentUser.loading);
	const user = useAppSelector((state) => state.currentUser.data);

	const handleLogout = () => {
		dispatchLogout();
	};

	if (isLoading || !user) {
		return <div className="bg-bgsecondary py-4 rounded-full shadow-xl w-48 animate-pulse" />;
	}

	return (
		<DropdownMenu trigger={<UserPill user={user} />}>
			<div className="bg-bgsecondary py-4 px-8 rounded-lg shadow-xl min-w-fit">
				<div className="flex flex-col items-center justify-center gap-2 pb-2 mx-2 cursor-default">
					<UserMeProfilePicture size={64} />
					<p className="text-md font-bold">{user.name}</p>
					<p className="text-sm text-secondary">@{user.username}</p>
				</div>
				<Link href={`/home/user/${user.id}`}>
					<DropdownItem className={defaults}>Account</DropdownItem>
				</Link>
				<button type="button" className={defaults} onClick={handleLogout}>
					<DropdownItem>Logout</DropdownItem>
				</button>
			</div>
		</DropdownMenu>
	);
}
