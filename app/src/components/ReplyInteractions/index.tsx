import Like from './Like';
import Repost from './Repost';
import { PostType } from '@/types';
import ReplyButton from '../Dummies/ReplyButton';

interface ReplyInteractionsProps {
	reply: PostType;
	isPost: boolean;
}

export default function ReplyInteractions({ reply, isPost }: ReplyInteractionsProps) {
	return (
		<div className="flex items-center justify-evenly cursor-default select-none">
			<Like id={reply.id} count={reply.likes} liked={reply.currentUserHasLiked} isPost={isPost} />
			<Repost id={reply.id} count={reply.reposts} reposted={reply.currentUserHasReposted} isPost={isPost} />
			{!isPost && <ReplyButton replyId={reply.id} count={reply.comments} replace />}
		</div>
	);
}
