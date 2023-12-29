import { useAppDispatch } from '@/hooks/useRedux';
import { interactWithReply } from '@/store/thunks/replies.thunk';
import LikeButton from '../Dummies/LikeButton';

interface LikeProps {
	id: string;
	count: number;
	liked: boolean;
}

export default function Like({ id, count, liked }: LikeProps) {
	const dispatch = useAppDispatch();

	const type = liked ? 'dislike' : 'like';

	const handleClick = () => interactWithReply(dispatch, { id, type });

	return <LikeButton count={count} active={liked} dispatch={handleClick} />;
}
