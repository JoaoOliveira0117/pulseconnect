import { param } from 'express-validator';
import { strict } from '../shared/strict.js';
import { postContent } from '../shared/postContent.js';
import { postExists } from '../shared/postExists.js';

export default strict([
	postContent,
	param('id').exists().withMessage('Reply id is required').isUUID().withMessage('Reply id is invalid'),
	postExists,
]);
