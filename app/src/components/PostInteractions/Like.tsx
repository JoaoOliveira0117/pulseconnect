import { SlLike } from 'react-icons/sl';
import Button from '../Dummies/Button';
import Tooltip from '../Dummies/Tooltip';
import { useAppDispatch } from '@/hooks/useRedux';
import { likePostAction, removeLikePostAction } from '@/store/thunks/posts.thunk';
import { likeReplyAction, removeLikeReplyAction } from '@/store/thunks/comments.thunk';

interface LikeProps {
	userToken?: string;
	id: string;
	count: string | number;
	liked: boolean;
	isComment?: boolean;
}

export default function Like({ userToken, id, count, liked, isComment }: LikeProps) {
	const dispatch = useAppDispatch();

	const likeAction = isComment ? likeReplyAction : likePostAction;
	const removeLikeAction = isComment ? removeLikeReplyAction : removeLikePostAction;

	const handleClick = () =>
		liked ? dispatch(removeLikeAction({ id }, userToken)) : dispatch(likeAction({ id }, userToken));

	return (
		<Tooltip content="Like" delayDuration={150}>
			<div className="w-full">
				<Button
					variant="borderless"
					className="w-full py-2 m-auto flex items-center justify-center gap-2"
					onClick={handleClick}
					active={liked}
				>
					<SlLike />
					{count}
				</Button>
			</div>
		</Tooltip>
	);
}
