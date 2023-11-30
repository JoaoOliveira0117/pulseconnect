import { cookies } from 'next/headers';
import UserMe from '@/views/userMe';

export default function Page() {
	const userToken = cookies().get('jwt')?.value;
	return <UserMe userToken={userToken} />;
}
