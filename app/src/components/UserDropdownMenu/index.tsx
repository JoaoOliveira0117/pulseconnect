'use client';

import Link from 'next/link';
import Cookies from 'js-cookie';
import { useRouter } from 'next/navigation';
import DropdownItem from '../DropdownMenu/dropdownItem';
import DropdownMenu from '../DropdownMenu';
import UserPill from '../UserPill';

interface UserProps {
	userToken?: string;
}

export default function User({ userToken = '' }: UserProps) {
	const router = useRouter();

	const handleLogout = () => {
		Cookies.remove('jwt');
		router.replace('/auth');
	};

	return (
		<DropdownMenu trigger={<UserPill userToken={userToken} />}>
			<DropdownItem>
				<Link href="/home/user/me" className="block w-full p-2 px-4 hover:bg-bgsecondary">
					User Settings
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
