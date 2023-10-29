import User from '../../models/user.js'
import CrudBase from '../crud.js'

class UserBase extends CrudBase {
  constructor(req, res) {
    super(req, res, User)
  }

  async updateUser(userId, body) {
    const user = await this.Model.update(body, { where: { id: userId }})
    return user
  }
}

export default UserBase
