import { body } from 'express-validator';
import { mountErrorMessage } from '../../utils/responseHandler.js';
import User from '../../models/user.js';

export const emailExists = body('email').custom(async (email) => {
	const user = await User.findOne({ where: { email } });
	if (user) {
		throw mountErrorMessage(`User already exists with email ${email}`, 400);
	}
});
