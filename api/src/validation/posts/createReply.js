import { postExistsWithProp, propExists, stringExists, validateExact } from '../index.js'

export default [
  stringExists('content')
    .isLength({ min: 1, max: 300 })
    .withMessage('content should have less than 300 characters'),
  propExists('id')
    .isUUID()
    .withMessage('id should be valid'),
  validateExact(),
  postExistsWithProp('id')
]