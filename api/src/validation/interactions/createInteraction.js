import { param } from 'express-validator';
import { strict } from '../shared/strict.js';

export default strict([
	param('id').exists().withMessage('Interaction id is required').isUUID().withMessage('Interaction id is invalid'),
]);
