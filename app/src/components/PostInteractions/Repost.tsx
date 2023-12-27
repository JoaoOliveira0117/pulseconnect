import { AiOutlineRetweet } from 'react-icons/ai';
import Button from '../Dummies/Button';
import Tooltip from '../Dummies/Tooltip';
import { useAppDispatch } from '@/hooks/useRedux';
import { repostPostAction, removeRepostPostAction } from '@/store/thunks/posts.thunk';
import { removeRepostReplyAction, repostReplyAction } from '@/store/thunks/comments.thunk';
import useAuth from '@/hooks/useAuth';

interface RepostProps {
	id: string;
	count: string | number;
	reposted: boolean;
	isComment?: boolean;
}

export default function Repost({ id, count, reposted, isComment }: RepostProps) {
	const dispatch = useAppDispatch();
	const { accessToken } = useAuth();

	const repostAction = isComment ? repostReplyAction : repostPostAction;
	const removeRepostAction = isComment ? removeRepostReplyAction : removeRepostPostAction;

	const handleClick = () =>
		reposted ? dispatch(removeRepostAction({ id }, accessToken)) : dispatch(repostAction({ id }, accessToken));

	return (
		<Tooltip content="Repost" delayDuration={150}>
			<div className="w-full">
				<Button
					variant="borderless"
					className="w-full py-2 m-auto flex items-center justify-center gap-2"
					onClick={handleClick}
					active={reposted}
				>
					<AiOutlineRetweet />
					{count}
				</Button>
			</div>
		</Tooltip>
	);
}
