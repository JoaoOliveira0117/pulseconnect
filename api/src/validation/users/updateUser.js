import { body } from 'express-validator';
import { usernameExists } from '../shared/usernameExists.js';
import { emailExists } from '../shared/emailExists.js';
import { strict } from '../shared/strict.js';

export default strict([
	body('name').optional().isLength({ min: 5, max: 50 }).withMessage('Name should have between 5 and 50 characters'),
	body('username')
		.optional()
		.isLength({ min: 4, max: 20 })
		.withMessage('Username should have between 4 and 20 characters')
		.matches(/^(?![A-Za-z0-9\-_]+$).*/)
		.withMessage('Username should not contain special characters and spaces'),
	body('email').isEmail().optional().withMessage('Invalid email address'),
	body('password')
		.optional()
		.isLength({ min: 6 })
		.withMessage('Password must be at least 6 characters long')
		.matches(/\d/)
		.withMessage('Password should contain at least one number'),
	body('confirm_password').custom((confirmPassword, { req }) => {
		if (confirmPassword !== req.body.password) throw new Error('passwords do not match');
		return confirmPassword;
	}),
	usernameExists,
	emailExists,
]);
