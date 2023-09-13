import UserBase from './base.js'
import validation from '../../validation/users/createUser.js'

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
