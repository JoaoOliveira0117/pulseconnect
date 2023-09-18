import User from '../../models/user.js'
import CrudBase from '../crud.js'

class UserBase extends CrudBase {
  constructor(req, res) {
    super(req, res, User)
  }
}

export default UserBase
