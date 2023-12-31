import Logo from '../Dummies/Logo';
import Navbar from '../Navbar';
import UserDropdownMenu from '../UserDropdownMenu';
import Link from 'next/link';

export default function Header() {
	return (
		<header className="w-full py-4 flex flex-col gap-4">
			<div className="flex items-center justify-between">
				<Link href={'/home'}>
					<Logo />
				</Link>
				<UserDropdownMenu />
			</div>
			<Navbar />
		</header>
	);
}
