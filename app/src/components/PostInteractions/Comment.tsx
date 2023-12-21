import { FaRegComments } from 'react-icons/fa';
import Button from '../Dummies/Button';
import Tooltip from '../Dummies/Tooltip';
import Link from 'next/link';

interface CommentProps {
	id: string;
	count: string | number;
}

export default function Comment({ id, count }: CommentProps) {
	return (
		<Tooltip content="Comment" delayDuration={150}>
			<div className="w-full">
				<Link href={`reply/${id}`}>
					<Button variant="borderless" className="w-full py-2 m-auto flex items-center justify-center gap-2">
						<FaRegComments />
						{count}
					</Button>
				</Link>
			</div>
		</Tooltip>
	);
}
