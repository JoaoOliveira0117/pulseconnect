import Like from './Like';
import Repost from './Repost';
import { PostType } from '@/types';
import ReplyButton from '../Dummies/ReplyButton';

interface ReplyInteractionsProps {
	reply: PostType;
}

export default function ReplyInteractions({ reply }: ReplyInteractionsProps) {
	return (
		<div className="flex items-center justify-evenly cursor-default select-none">
			<Like id={reply.id} count={reply.likes} liked={reply.currentUserHasLiked} />
			<Repost id={reply.id} count={reply.reposts} reposted={reply.currentUserHasReposted} />
			<ReplyButton replyId={reply.id} count={reply.comments} replace />
		</div>
	);
}
