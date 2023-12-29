import { useAppDispatch } from '@/hooks/useRedux';
import RepostButton from '../Dummies/RepostButton';
import { interactWithPost } from '@/store/thunks/posts.thunk';

interface RepostProps {
	id: string;
	count: number;
	reposted: boolean;
}
export default function Repost({ id, count, reposted }: RepostProps) {
	const dispatch = useAppDispatch();

	const type = reposted ? 'disrepost' : 'repost';

	const handleClick = () => interactWithPost(dispatch, { id, type });

	return <RepostButton count={count} active={reposted} dispatch={handleClick} />;
}
