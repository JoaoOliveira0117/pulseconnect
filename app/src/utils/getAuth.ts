import Cookies from 'js-cookie';

function getAuth(token?: string) {
	const currentToken = Cookies.get('jwt');

	if (token) {
		Cookies.set('jwt', token);
		return `Bearer ${token}`;
	}

	return `Bearer ${currentToken}`;
}

export default getAuth;
