import { param } from 'express-validator';
import { strict } from '../shared/strict';
import { postContent } from '../shared/postContent';
import { postExists } from '../shared/postExists';

export default strict([postContent, param('id').notEmpty().isUUID().withMessage('id is invalid'), postExists('id')]);
