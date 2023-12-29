import { matchedData, validationResult } from 'express-validator';
import { handleError, mountErrorMessage } from '../../utils/responseHandler.js';

const sendError = (res, errors, statusCode) => {
	const error = mountErrorMessage(errors, statusCode);
	res.status(statusCode).json(handleError(error, statusCode));
};

const strictValidation = (req, res, next) => {
	const errors = validationResult(req);
	const data = matchedData(req);
	const reqKeys = { ...req.body, ...req.params, ...req.query };

	if (!errors.isEmpty()) {
		const errorList = errors.array({ onlyFirstError: true, flatten: true });
		return sendError(res, errorList, 422);
	}

	if (Object.keys(data).length !== Object.keys(reqKeys).length) {
		return sendError(res, 'Invalid request body', 422);
	}

	return next();
};

export const strict = (validation) => {
	return [...validation, strictValidation];
};
