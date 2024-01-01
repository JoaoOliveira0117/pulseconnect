import { useAppDispatch } from '@/hooks/useRedux';
import { interactWithReply } from '@/store/thunks/replies.thunk';
import LikeButton from '../Dummies/LikeButton';
import { interactWithPost } from '@/store/thunks/posts.thunk';

interface LikeProps {
	id: string;
	count: number;
	liked: boolean;
	isPost: boolean;
}

export default function Like({ id, count, liked, isPost }: LikeProps) {
	const dispatch = useAppDispatch();

	const type = liked ? 'dislike' : 'like';

	const handleInteraction = isPost ? interactWithPost : interactWithReply;

	const handleClick = () => handleInteraction(dispatch, { id, type });

	return <LikeButton count={count} active={liked} dispatch={handleClick} />;
}
