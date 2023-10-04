import { stringExists } from '../index.js'

export default [
  stringExists('content')
    .isLength({ min: 1, max: 300 })
    .withMessage('content should have less than 300 characters')
]