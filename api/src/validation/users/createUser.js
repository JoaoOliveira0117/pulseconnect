import { stringExists, emailExists, passwordExists, validateExact } from '../index.js';
import User from '../../models/user.js';

export default [
	stringExists('name'),
	passwordExists('password'),
	stringExists('username').custom(async (username) => {
		const user = await User.findOne({ where: { username } });
		if (user) {
			throw new Error('username already in use');
		}
	}),
	stringExists('confirm_password').custom((value, { req }) => {
		if (value != req.body.password) throw new Error('passwords do not match');
		return value;
	}),
	emailExists('email').custom(async (email) => {
		const user = await User.findOne({ where: { email } });
		if (user) {
			throw new Error('email already in use');
		}
	}),
	validateExact(),
];
