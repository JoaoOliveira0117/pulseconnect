import { emailExists, passwordExists } from '../index.js'
import User from '../../models/user.js'

export default [
  passwordExists('password'),
  emailExists('email')
    .custom(async (email) => {
      const user = await User.findOne({ where: { email } })

      if (!user) {
        throw new Error('no user found for email: ' + email)
      }
    })
]