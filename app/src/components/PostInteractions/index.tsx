import Like from './Like';
import Repost from './Repost';
import ReplyButton from '../Dummies/ReplyButton';
import { PostType } from '@/types';

interface PostInteractionsProps {
	post: PostType;
}

export default function PostInteractions({ post }: PostInteractionsProps) {
	return (
		<div className="flex items-center justify-evenly cursor-default select-none">
			<Like id={post.id} count={post.likes} liked={post.currentUserHasLiked} />
			<Repost id={post.id} count={post.reposts} reposted={post.currentUserHasReposted} />
			<ReplyButton replyId={post.id} count={post.comments} />
		</div>
	);
}
