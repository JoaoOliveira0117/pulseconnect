import { body } from 'express-validator';
import { emailNotExists } from '../shared/emailNotExists.js';
import { strict } from '../shared/strict.js';

export default strict([
	body('password')
		.isLength({ min: 6 })
		.withMessage('Password must be at least 6 characters long')
		.matches(/\d/)
		.withMessage('Password should contain at least one number'),
	body('email').isEmail().withMessage('Invalid email address'),
	emailNotExists,
]);
