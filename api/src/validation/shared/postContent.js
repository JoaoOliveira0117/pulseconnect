import { body } from 'express-validator';

export const postContent = body('content')
	.exists()
	.isString()
	.isLength({ min: 1, max: 300 })
	.withMessage('content should have less than 300 characters');
