import { body } from 'express-validator';
import User from '../../models/user.js';

export const usernameExists = body('username').custom(async (username) => {
	const user = await User.findOne({ where: { username } });
	if (user) {
		throw new Error(`User already exists with username ${username}`);
	}
});
