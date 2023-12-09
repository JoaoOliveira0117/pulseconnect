export const data = (req, body, statusCode = 200) => {
	const reqData = {
		params: req.params,
		query: req.query,
		body: req.body,
	};

	return {
		...reqData,
		data: body,
		statusCode: statusCode,
	};
};

export const error = (req, err, statusCode = 400) => {
	const errors = Array.isArray(err) ? err.map(({ msg, message }) => msg || message) : [];
	return {
		...data(req, {}, statusCode),
		errors: errors.length ? errors : [err],
	};
};
