'use client';

import Link from 'next/link';
import Cookies from 'js-cookie';
import { useRouter } from 'next/navigation';
import DropdownItem from '../DropdownMenu/dropdownItem';
import DropdownMenu from '../DropdownMenu';
import UserPill from '../UserPill';
import { useAppSelector } from '@/hooks/useRedux';
import UserImage from '../Dummies/ProfilePicture';

const defaults = 'w-full p-2 text-center hover:bg-secondary outline-none transition-all duration-150';

export default function UserDropdown() {
	const user = useAppSelector((state) => state.userMe.data || {});
	const router = useRouter();

	const handleLogout = () => {
		Cookies.remove('jwt');
		router.replace('/auth');
	};

	return (
		<DropdownMenu trigger={<UserPill user={user} />}>
			<div className="bg-bgsecondary pt-4 rounded-lg shadow-xl w-32">
				<div className="flex flex-col items-center justify-center gap-2 pb-2 mx-2 cursor-default">
					<UserImage src={user?.profilePicture} size={48} />
					<p className="text-sm font-bold">{user.name}</p>
					<p className="text-xs text-secondary">@{user.username}</p>
				</div>
				<DropdownItem className={`${defaults}`}>
					<Link href="/home/user/me">Settings</Link>
				</DropdownItem>
				<DropdownItem className={`${defaults} rounded-b-md`}>
					<button type="button" onClick={handleLogout}>
						Logout
					</button>
				</DropdownItem>
			</div>
		</DropdownMenu>
	);
}
