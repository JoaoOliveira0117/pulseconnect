export const mountErrorMessage = (err, statusCode) => {
	const errors = Array.isArray(err) ? err.map(({ msg, message }) => msg || message) : [];

	if (errors.length) {
		return { errors, statusCode };
	}

	return { errors: [err], statusCode };
};

export const handleData = (body, statusCode = 200) => {
	return {
		data: body,
		statusCode: statusCode,
	};
};

export const handleError = (err, statusCode = 400) => {
	console.log(err);
	return {
		...handleData({}, statusCode),
		errors: err.errors?.length ? err.errors : [err],
	};
};
