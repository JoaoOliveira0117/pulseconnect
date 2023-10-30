import { propExists, validateExact } from '../index.js'

export default [
  propExists('id')
    .isUUID()
    .withMessage('id should be valid'),
  validateExact(),
]