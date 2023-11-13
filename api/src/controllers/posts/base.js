import Post from '../../models/post.js'
import CrudBase from '../crud.js'
import getPostsQuery from './queries/getPosts.js'
import getPostRepliesQuery from './queries/getPostReplies.js'

class PostBase extends CrudBase {
  constructor(req, res) {
    super(req, res, Post)
  }
  
  async getPosts(query) {
    return await this.findAndCountAll(getPostsQuery(query, this.req.user.id, this.getPagination()))
  }

  async getPostReplies(query) {
    return await this.findAndCountAll(getPostRepliesQuery(query.id, this.getPagination()))
  }
}

export default PostBase
