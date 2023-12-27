import { cookies } from 'next/headers';
import PostContainer from '@/components/PostContainer';

export default function Personal() {
	const userToken = cookies().get('jwt')?.value;
	return <PostContainer userToken={userToken} isPersonalPage />;
}
