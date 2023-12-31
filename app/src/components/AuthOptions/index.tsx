import { AiFillGithub, AiFillGoogleCircle } from 'react-icons/ai';
import Button from '../Dummies/Button';

export default function AuthOptions() {
	return (
		<div className="flex items-center justify-evenly gap-4">
			<Button type="button" variant="filled" className="text-xl p-3">
				<AiFillGithub />
			</Button>
			<Button type="button" variant="filled" className="text-xl p-3">
				<AiFillGoogleCircle />
			</Button>
		</div>
	);
}
