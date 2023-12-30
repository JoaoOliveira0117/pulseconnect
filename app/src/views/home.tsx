import useAuth from '@/hooks/useAuth';

export default function Home() {
	const { accessToken, dispatchAccessToken } = useAuth();
	console.log(accessToken);
}
