import { useAppDispatch } from '@/hooks/useRedux';
import LikeButton from '../Dummies/LikeButton';
import { interactWithPost } from '@/store/thunks/posts.thunk';

interface LikeProps {
	id: string;
	count: number;
	liked: boolean;
}

export default function Like({ id, count, liked }: LikeProps) {
	const dispatch = useAppDispatch();

	const type = liked ? 'dislike' : 'like';

	const handleClick = () => interactWithPost(dispatch, { id, type });

	return <LikeButton count={count} active={liked} dispatch={handleClick} />;
}
