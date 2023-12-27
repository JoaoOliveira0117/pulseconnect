import PostComposer from '@/components/PostComposer';
import PostContainer from '@/components/PostContainer';

export default function Trending() {
	return (
		<div className="w-full max-w-3xl m-auto">
			<PostComposer />
			<PostContainer />
		</div>
	);
}
