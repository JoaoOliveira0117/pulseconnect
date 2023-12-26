import { param } from 'express-validator';
import { strict } from '../shared/strict.js';
import { postExists } from '../shared/postExists.js';

export default strict([(param('id').notEmpty().isUUID().withMessage('id is invalid'), postExists('id'))]);
