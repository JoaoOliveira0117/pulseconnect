import getAuth from "./getAuth";

export default function getHeaders(auth = false) {
	const headers = {
		'Content-Type': 'application/json',
		Authorization: '',
	};

	if (!auth) {
		return headers;
	}

	const token = getAuth();

	if (token) {
		headers.Authorization = `Bearer ${token}`;
	}

	return headers;
}