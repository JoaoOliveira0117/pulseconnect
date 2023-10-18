import Logo from '../Dummies/Logo';
import Navbar from '../Navbar';
import User from '../User';

export default function Header() {
	return (
		<div className="w-full min-w-[1000px] cursor-default select-none my-6">
			<div className="flex items-center justify-between">
				<Logo />
				<User />
			</div>
			<Navbar />
		</div>
	);
}
