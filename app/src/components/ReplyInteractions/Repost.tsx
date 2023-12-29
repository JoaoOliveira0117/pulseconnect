import { useAppDispatch } from '@/hooks/useRedux';
import { interactWithReply } from '@/store/thunks/replies.thunk';
import RepostButton from '../Dummies/RepostButton';

interface RepostProps {
	id: string;
	count: number;
	reposted: boolean;
}
export default function Repost({ id, count, reposted }: RepostProps) {
	const dispatch = useAppDispatch();

	const type = reposted ? 'disrepost' : 'repost';

	const handleClick = () => interactWithReply(dispatch, { id, type });

	return <RepostButton count={count} active={reposted} dispatch={handleClick} />;
}
