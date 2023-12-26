import { param } from 'express-validator';
import User from '../../models/user.js';

export const userExists = param('id').custom(async (id) => {
	const user = await User.findOne({ where: { id } });
	if (!user) {
		throw new Error('User does not exist');
	}
});
