import { cookies } from 'next/headers';
import PostComposer from '@/components/PostComposer';
import PostContainer from '@/components/PostContainer';

export default function Trending() {
	const userToken = cookies().get('jwt')?.value;
	return (
		<div className="min-w-[1000px] flex flex-col gap-8">
			<PostComposer userToken={userToken} />
			<PostContainer userToken={userToken} />
		</div>
	);
}
