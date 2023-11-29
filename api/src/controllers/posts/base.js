import Post from '../../models/post.js'
import CrudBase from '../crud.js'
import getPostsQuery from './queries/getPosts.js'
import getPostRepliesQuery from './queries/getPostReplies.js'
import { db } from '../../config/db.js'
import buildGetPostById from './queries/getPostById.js'

class PostBase extends CrudBase {
  constructor(req, res) {
    super(req, res, Post)
  }

  async createPost(query) {
    return await db.transaction(async transaction => {
      const createdPost = await this.create(query, {transaction})
      const post = await this.findOne(buildGetPostById(createdPost.id, query.userId), { transaction })
      return post
    })
  }
  
  async getPosts(query) {
    return await this.findAndCountAll(getPostsQuery(query, this.req.user.id, this.getPagination()))
  }

  async getPostReplies(query) {
    return await this.findAndCountAll(getPostRepliesQuery(query.id, this.getPagination()))
  }
}

export default PostBase
