import UserBase from './base.js'
import validation from '../../validation/users/createUser.js'
import { generateToken } from '../../config/auth.js'

class CreateUser extends UserBase {
  async response() {
    try {
      const { body } = this.req
      const user = await this.create(body)
      const token = generateToken({ id: user.id })
      this.success({user, token})
    } catch (err) {
      this.fail(err)
    }
  }
}

const createUser = (req, res) => new CreateUser(req, res).send()
export default [validation, createUser]
