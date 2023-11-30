import { FaRegComments } from 'react-icons/fa';
import Button from '../Dummies/Button';
import Tooltip from '../Dummies/Tooltip';

interface CommentProps {
	count: number;
}

export default function Comment({ count }: CommentProps) {
	return (
		<Tooltip content="Comment">
			<div className="w-full">
				<Button variant="borderless" className="w-full py-2 m-auto flex items-center justify-center gap-2">
					<FaRegComments />
					{count}
				</Button>
			</div>
		</Tooltip>
	);
}
