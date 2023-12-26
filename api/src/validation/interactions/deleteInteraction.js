import { param } from 'express-validator';
import { strict } from '../shared/strict.js';

export default strict([param('id').exists().isUUID().withMessage('Invalid interaction id')]);
