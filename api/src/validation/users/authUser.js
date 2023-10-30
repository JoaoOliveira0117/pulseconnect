import { emailExists, passwordExists, validateExact } from '../index.js'
import User from '../../models/user.js'

export default [
  passwordExists('password'),
  emailExists('email')
    .custom(async (email) => {
      const user = await User.findOne({ where: { email } })

      if (!user) {
        throw new Error('No such user found')
      }
    }),
  validateExact()
]