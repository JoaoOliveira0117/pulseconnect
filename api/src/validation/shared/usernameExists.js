import { body } from 'express-validator';
import User from '../../models/user.js';
import { mountErrorMessage } from '../../utils/responseHandler.js';

export const usernameExists = body('username').custom(async (username) => {
	const user = await User.findOne({ where: { username } });
	if (user) {
		throw mountErrorMessage(`User already exists with username ${username}`, 400);
	}
});
