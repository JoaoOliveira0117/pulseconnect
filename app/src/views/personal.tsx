import { cookies } from 'next/headers';
import PostContainer from '@/components/PostContainer';

export default function Personal() {
	const userToken = cookies().get('jwt')?.value;
	return (
		<div className="min-w-[1000px] flex flex-col gap-8">
			<PostContainer userToken={userToken} isPersonalPage />
		</div>
	);
}
