import UserBase from './base.js'
import validation from '../../validation/users/getMeUser.js'

class GetMeUser extends UserBase {
  async response() {
    try {
      const { id } = this.req.user
      const result = await this.getUser({ id })
      this.success(result)
    } catch (err) {
      this.fail(err)
    }
  }
}

const getMeUser = (req, res) => new GetMeUser(req, res).send()
export default [validation, getMeUser]
