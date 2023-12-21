import { cookies } from 'next/headers';
import PostContainer from '@/components/PostContainer';

export default function Personal() {
	const userToken = cookies().get('jwt')?.value;
	return (
		<div className="max-w-[1000px] flex flex-col items-center gap-8">
			<PostContainer userToken={userToken} isPersonalPage />
		</div>
	);
}
