import { queryExists, userExistsWithProp, validateExact } from '../index.js'

export default [
  queryExists('id')
    .isUUID()
    .withMessage('invalid UUID'),
  userExistsWithProp('id'),
  validateExact(),
]