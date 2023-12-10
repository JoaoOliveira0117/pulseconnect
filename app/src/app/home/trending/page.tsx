import Trending from '@/views/trending';
import { cookies } from 'next/headers';

export default function Page() {
	const userToken = cookies().get('jwt')?.value;
	return <Trending userToken={userToken} />;
}
