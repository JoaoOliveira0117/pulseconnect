import { body } from 'express-validator';
import User from '../../models/user';

export const emailNotExists = body('email').custom(async (email) => {
	const user = await User.findOne({ where: { email } });
	if (!user) {
		throw new Error(`No such user with email ${email}`);
	}
});
