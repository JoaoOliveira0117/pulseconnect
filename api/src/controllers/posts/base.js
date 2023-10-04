import Post from '../../models/post.js'
import CrudBase from '../crud.js'
import UserModel from '../../models/user.js'

class PostBase extends CrudBase {
  constructor(req, res) {
    super(req, res, Post)
  }

  includeUser() {
    return {
      model: UserModel,
      attributes: ['name','username']
    }
  }

  includeModel() {
    return {
      user: this.includeUser()
    }
  }
  
  async getPosts(query) {
    const { user } = this.includeModel()
    const items = await this.findAndCountAll(query, [user])
    return items
  }
}

export default PostBase
