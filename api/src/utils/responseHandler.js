export const handleData = (body, statusCode = 200) => {
	return {
		data: body,
		statusCode: statusCode,
	};
};

export const handleError = (err, statusCode = 400) => {
	const errors = Array.isArray(err) ? err.map(({ msg, message }) => msg || message) : [];
	return {
		...handleData({}, statusCode),
		errors: errors.length ? errors : [err],
	};
};
