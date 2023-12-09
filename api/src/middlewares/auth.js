import { validateToken } from '../config/auth.js';
import { error } from '../utils/responseHandler.js';

export default (req, res, next) => {
	const token = req.headers['authorization'];

	if (!token) {
		return res.status(401).json(error(req, 'Authentication required', 401));
	}

	try {
		const splitted = token.split(' ')[1];
		const decoded = validateToken(splitted);
		req.user = decoded;
	} catch (err) {
		return res.status(403).json(error(req, 'Authentication failed', 403));
	}

	return next();
};
