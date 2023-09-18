import Post from '../../models/post.js'
import CrudBase from '../crud.js'

class PostBase extends CrudBase {
  constructor(req, res) {
    super(req, res, Post)
  }
}

export default PostBase
