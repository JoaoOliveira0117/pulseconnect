import { propExists } from '../index.js';

export default [propExists('id').isUUID()
.withMessage('id must be valid')];
