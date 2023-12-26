import { strict } from '../shared/strict.js';
import { body } from 'express-validator';
import { usernameExists } from '../shared/usernameExists.js';
import { emailExists } from '../shared/emailExists.js';

export default strict([
	body('name')
		.exists()
		.withMessage('Name is required')
		.isLength({ min: 5, max: 50 })
		.withMessage('Name should have between 5 and 50 characters'),
	body('username')
		.exists()
		.withMessage('Username is required')
		.isLength({ min: 4, max: 20 })
		.withMessage('Username should have between 4 and 20 characters')
		.matches(/^([A-Za-z0-9\-_]+$).*/)
		.withMessage('Username must not contain special characters or spaces'),
	body('email').isEmail().withMessage('Invalid email address'),
	body('password')
		.isLength({ min: 6 })
		.withMessage('Password must be at least 6 characters long')
		.matches(/\d/)
		.withMessage('Password should contain at least one number'),
	body('confirm_password')
		.exists()
		.withMessage('Password confirmation is required')
		.custom((confirmPassword, { req }) => {
			if (confirmPassword != req.body.password) throw new Error('passwords do not match');
			return confirmPassword;
		}),
	usernameExists,
	emailExists,
]);
