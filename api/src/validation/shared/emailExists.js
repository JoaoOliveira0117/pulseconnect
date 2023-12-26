import { body } from 'express-validator';
import User from '../../models/user.js';

export const emailExists = body('email').custom(async (email) => {
	const user = await User.findOne({ where: { email } });
	if (user) {
		throw new Error(`User already exists with email ${email}`);
	}
});
