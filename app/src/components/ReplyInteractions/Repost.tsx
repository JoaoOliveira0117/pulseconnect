import { useAppDispatch } from '@/hooks/useRedux';
import { interactWithPost, interactWithReply } from '@/store/thunks/replies.thunk';
import RepostButton from '../Dummies/RepostButton';

interface RepostProps {
	id: string;
	count: number;
	reposted: boolean;
	isPost: boolean;
}
export default function Repost({ id, count, reposted, isPost }: RepostProps) {
	const dispatch = useAppDispatch();

	const type = reposted ? 'disrepost' : 'repost';

	const handleInteraction = isPost ? interactWithPost : interactWithReply;

	const handleClick = () => handleInteraction(dispatch, { id, type });

	return <RepostButton count={count} active={reposted} dispatch={handleClick} />;
}
