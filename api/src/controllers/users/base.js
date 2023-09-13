import User from '../../models/user.js'
import Controller from '../controller.js'

class UserBase extends Controller {
  constructor(req, res) {
    super(req, res)
    this.Model = User
  }

  async create(body) {
    const user = await this.Model.create(body)
    return user
  }

  async findOne(query) {
    const user = await this.Model.findOne(query)
    return user
  }
}

export default UserBase
