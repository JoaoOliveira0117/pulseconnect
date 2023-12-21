import Like from './Like';
import Repost from './Repost';
import Comment from './Comment';

interface InteractionsProps {
	userToken?: string;
	postId: string;
	postLikes: string | number;
	postReposts: string | number;
	postComments: string | number;
	currentUserHasLiked: boolean;
	currentUserHasReposted: boolean;
}

export default function Interactions({
	userToken,
	postId,
	postLikes,
	postReposts,
	postComments,
	currentUserHasLiked,
	currentUserHasReposted,
}: InteractionsProps) {
	return (
		<div className="flex items-center justify-evenly">
			<Like userToken={userToken} id={postId} count={postLikes} liked={currentUserHasLiked} />
			<Repost userToken={userToken} id={postId} count={postReposts} reposted={currentUserHasReposted} />
			<Comment id={postId} count={postComments} />
		</div>
	);
}
