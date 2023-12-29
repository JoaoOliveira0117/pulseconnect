import Cookies from 'js-cookie';

function getAuth(token?: string) {
	const currentToken = Cookies.get('jwt');

	if (!currentToken && token) {
		Cookies.set('jwt', token);
		return token;
	}

	return currentToken;
}

export default getAuth;
