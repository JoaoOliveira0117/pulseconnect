import { FaRegComments } from 'react-icons/fa';
import Button from '../Dummies/Button';
import Tooltip from '../Dummies/Tooltip';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

interface CommentProps {
	id: string;
	count: string | number;
	isComment?: boolean;
}

export default function Comment({ id, count, isComment }: CommentProps) {
	const pathname = usePathname().split('/')[1];
	return (
		<Tooltip content="Comment" delayDuration={150}>
			<div className="w-full">
				<Link href={`/${pathname}/reply/${id}`} replace={isComment}>
					<Button variant="borderless" className="w-full py-2 m-auto flex items-center justify-center gap-2">
						<FaRegComments />
						{count}
					</Button>
				</Link>
			</div>
		</Tooltip>
	);
}
