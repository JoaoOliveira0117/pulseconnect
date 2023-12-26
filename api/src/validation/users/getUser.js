import { param } from 'express-validator';
import { userExists } from '../shared/userExists.js';
import { strict } from '../shared/strict.js';

export default strict([
	param('id').exists().withMessage('User id is required').isUUID().withMessage('invalid UUID'),
	userExists,
]);
