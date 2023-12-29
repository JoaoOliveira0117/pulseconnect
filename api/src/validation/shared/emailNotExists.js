import { body } from 'express-validator';
import User from '../../models/user.js';
import { mountErrorMessage } from '../../utils/responseHandler.js';

export const emailNotExists = body('email').custom(async (email) => {
	const user = await User.findOne({ where: { email } });
	if (!user) {
		throw mountErrorMessage(`No such user with email ${email}`, 400);
	}
});
