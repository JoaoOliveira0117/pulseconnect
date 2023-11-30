import Like from './Like';
import Repost from './Repost';
import Comment from './Comment';

interface InteractionsProps {
	userToken?: string;
	id: string;
	likes: string | number;
	reposts: string | number;
	comments: number;
	liked: boolean;
	reposted: boolean;
}

export default function Interactions({ userToken, id, likes, reposts, comments, liked, reposted }: InteractionsProps) {
	return (
		<div className="flex items-center justify-evenly">
			<Like userToken={userToken} id={id} count={likes} liked={liked} />
			<Repost userToken={userToken} id={id} count={reposts} reposted={reposted} />
			<Comment count={comments} />
		</div>
	);
}
