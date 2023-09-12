import UserBase from './base.js'
import User from '../../models/user.js'
import { body } from 'express-validator'

const validation = [
  body('username').exists().not().isEmpty().custom(async (username) => {
    const user = await User.findOne({ where: { username } })
    if (user) {
      throw new Error('Username already in use')
    }
  }),
  body('email').exists().not().isEmpty().isEmail().custom(async (email) => {
    const user = await User.findOne({ where: { email } })
    if (user) {
      throw new Error('Email already in use')
    }
  }),
  body('name').exists().not().isEmpty(),
  body('password').exists().not().isEmpty(),
  body('confirm_password').exists().not().isEmpty().custom(value => value === body('password'))
]

class CreateUser extends UserBase {
  async response() {
    try {
      const { body } = this.req
      const user = await this.create(body)
      this.success(user)
    } catch (err) {
      this.fail(err)
    }
  }
}

const userController = (req, res) => new CreateUser(req, res).send()
export default [validation, userController]
