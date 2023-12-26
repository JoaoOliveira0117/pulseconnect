import { param } from 'express-validator';
import { strict } from '../shared/strict.js';
import { postExists } from '../shared/postExists.js';

export default strict([
	(param('id').exists().withMessage('Post id is required').isUUID().withMessage('Post id is invalid'), postExists),
]);
