import { matchedData, validationResult } from 'express-validator';
import { handleError } from '../../utils/responseHandler';

const sendError = (res, errors, statusCode) => {
	res.status(statusCode).json(handleError(errors, statusCode));
};

const strictValidation = (req, res, next) => {
	const errors = validationResult(req);
	const data = matchedData(req);
	const reqKeys = { ...req.body, ...req.params, ...req.query };

	if (!errors.isEmpty()) {
		const errorList = errors.array({ onlyFirstError: true, flatten: true });
		sendError(res, errorList, 422);
	}

	if (Object.keys(data).length !== Object.keys(reqKeys).length) {
		sendError(res, 'Invalid request body', 422);
	}

	return next();
};

export const strict = (validation) => {
	return [...validation, strictValidation()];
};
