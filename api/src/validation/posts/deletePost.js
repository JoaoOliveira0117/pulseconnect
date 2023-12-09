import { propExists, postExistsWithProp } from '../index.js';

export default [propExists('id').isUUID()
.withMessage('id should be valid'), postExistsWithProp('id')];
