import UserBase from './base.js'
import validation from '../../validation/users/getUser.js'

class GetUser extends UserBase {
  async response() {
    try {
      const { id } = this.req.query
      const user = await this.getUser({ id })
      this.success({user})
    } catch (err) {
      this.fail(err)
    }
  }
}

const getUser = (req, res) => new GetUser(req, res).send()
export default [validation, getUser]
