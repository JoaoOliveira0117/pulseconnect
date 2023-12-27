import { cookies } from 'next/headers';
import Logo from '../Dummies/Logo';
import Navbar from '../Navbar';
import UserDropdownMenu from '../UserDropdownMenu';
import Link from 'next/link';

export default function Header() {
	const userToken = cookies().get('jwt')?.value;

	return (
		<header className="max-w-[1000px] m-auto py-4 flex flex-col gap-4">
			<div className="flex items-center justify-between">
				<Link href={'/home'}>
					<Logo />
				</Link>
				<UserDropdownMenu userToken={userToken} />
			</div>
			<Navbar />
		</header>
	);
}
