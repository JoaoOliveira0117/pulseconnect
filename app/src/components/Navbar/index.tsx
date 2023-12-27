import { ImFire, ImUser } from 'react-icons/im';
import NavbarItem from '../NavbarItem';

export default function Navbar() {
	return (
		<div className="text-2xl flex items-center">
			<NavbarItem tooltip="Trending 🔥" href="/home/trending">
				<ImFire className="m-auto" />
			</NavbarItem>
			<NavbarItem tooltip="Your Profile" href="/home/personal">
				<ImUser className="m-auto" />
			</NavbarItem>
		</div>
	);
}
