import { emailExists, passwordExists, propExists, stringExists, validateExact } from '../index.js'

export default [
  stringExists('name')
    .optional(),
  passwordExists('password')
    .optional(),
  stringExists('username')
    .optional(),
  stringExists('confirm_password')
    .optional()
    .custom((value, { req }) => {
      if(value != req.body.password) 
        throw new Error('passwords do not match')
      return value
    }),
  emailExists('email')
    .optional(),
  propExists('file').optional(),
  validateExact(),
]