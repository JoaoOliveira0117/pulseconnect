'use client';

import Link from 'next/link';
import Cookies from 'js-cookie';
import { useRouter } from 'next/navigation';
import DropdownItem from '../DropdownMenu/dropdownItem';
import DropdownMenu from '../DropdownMenu';
import UserPill from '../UserPill';
import { useAppSelector } from '@/hooks/useRedux';
import UserImage from '../Dummies/UserImage';

interface UserDropdownProps {
	userToken?: string;
}

export default function UserDropdown({ userToken = '' }: UserDropdownProps) {
	const user = useAppSelector((state) => state.userMe.data);
	const router = useRouter();

	const handleLogout = () => {
		Cookies.remove('jwt');
		router.replace('/auth');
	};

	return (
		<DropdownMenu trigger={<UserPill user={user} userToken={userToken} />}>
			<div className="flex flex-col items-center justify-center gap-2 pb-2 m-2 border-b border-b-secondary cursor-default">
				<UserImage src={user.profilePicture} size={48} />
				<p className="text-sm font-bold">{user.name}</p>
				<p className="text-xs text-secondary">@{user.username}</p>
			</div>
			<DropdownItem>
				<Link href="/home/user/me" className="block w-full p-2 px-4 hover:bg-bgsecondary">
					Settings
				</Link>
			</DropdownItem>
			<DropdownItem>
				<button type="button" className="block w-full p-2 px-4 hover:bg-bgsecondary" onClick={handleLogout}>
					Logout
				</button>
			</DropdownItem>
		</DropdownMenu>
	);
}
