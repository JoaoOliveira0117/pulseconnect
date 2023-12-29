import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { FaRegComments } from 'react-icons/fa';
import Button from './Button';
import Tooltip from './Tooltip';

type ReplyButtonProps = {
	replyId: string;
	count: number;
	replace?: boolean;
};

export default function ReplyButton({ replyId, count, replace = false }: ReplyButtonProps) {
	const pathname = usePathname().split('/')[1];
	return (
		<Tooltip content="Comment" delayDuration={150}>
			<div className="w-full">
				<Link href={`/${pathname}/reply/${replyId}`} replace={replace}>
					<Button variant="borderless" className="w-full py-2 m-auto flex items-center justify-center gap-2">
						<FaRegComments />
						{count}
					</Button>
				</Link>
			</div>
		</Tooltip>
	);
}
