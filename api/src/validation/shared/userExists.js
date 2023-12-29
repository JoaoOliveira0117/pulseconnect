import { param } from 'express-validator';
import User from '../../models/user.js';
import { mountErrorMessage } from '../../utils/responseHandler.js';

export const userExists = param('id').custom(async (id) => {
	const user = await User.findOne({ where: { id } });
	if (!user) {
		throw mountErrorMessage('User does not exist', 404);
	}
});
