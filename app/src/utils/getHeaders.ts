import getAuth from './getAuth';

export default function getHeaders(cookie?: string) {
	const token = getAuth(cookie);

	return {
		'Content-Type': 'application/json',
		Authorization: `Bearer ${token}`,
	};
}
