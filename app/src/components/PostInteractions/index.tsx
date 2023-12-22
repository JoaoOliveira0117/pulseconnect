import Like from './Like';
import Repost from './Repost';
import Comment from './Comment';

interface InteractionsProps {
	userToken?: string;
	isComment?: boolean;
	isPersonalPage?: boolean;
	postId: string;
	postLikes: string | number;
	postReposts: string | number;
	postComments: string | number;
	currentUserHasLiked: boolean;
	currentUserHasReposted: boolean;
}

export default function Interactions({
	userToken,
	isComment,
	postId,
	postLikes,
	postReposts,
	postComments,
	currentUserHasLiked,
	currentUserHasReposted,
}: InteractionsProps) {
	return (
		<div className="flex items-center justify-evenly">
			<Like userToken={userToken} id={postId} count={postLikes} liked={currentUserHasLiked} isComment={isComment} />
			<Repost
				userToken={userToken}
				id={postId}
				count={postReposts}
				reposted={currentUserHasReposted}
				isComment={isComment}
			/>
			<Comment id={postId} count={postComments} isComment={isComment} />
		</div>
	);
}
