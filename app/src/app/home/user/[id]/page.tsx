import { cookies } from 'next/headers';
import User from '@/views/user';

export default function Page() {
	const userToken = cookies().get('jwt')?.value;
	return <User userToken={userToken} />;
}
