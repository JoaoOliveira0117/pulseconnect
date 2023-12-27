import PostComposer from '@/components/PostComposer';
import PostContainer from '@/components/PostContainer';

interface TrendingProps {
	userToken?: string;
}

export default function Trending({ userToken }: TrendingProps) {
	return (
		<div className="w-full max-w-3xl m-auto">
			<PostComposer userToken={userToken} />
			<PostContainer userToken={userToken} />
		</div>
	);
}
