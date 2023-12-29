import Post from '../Post';
import { PostType } from '@/types';

type PostContainerProps = {
	posts: PostType[];
	showReplyTooltip: boolean;
};

export default function PostContainer({ posts, showReplyTooltip }: PostContainerProps) {
	return (
		<div className="flex flex-col gap-4 my-8 w-3/4 m-auto">
			{posts.map((post) => (
				<Post key={post.id} data={post} showReplyTooltip={showReplyTooltip} />
			))}
		</div>
	);
}
