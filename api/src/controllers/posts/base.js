import Post from '../../models/post.js'
import CrudBase from '../crud.js'
import UserModel from '../../models/user.js'
import Interactions from '../../models/interactions_posts_X_users.js'
import { fn, col } from 'sequelize'

class PostBase extends CrudBase {
  constructor(req, res) {
    super(req, res, Post)
  }

  includeInteractions() {
    return [{
      as: 'like_count',
      model: Interactions,
      where: {
        type: 'like'
      },
      attributes: [],
      duplicating: false,
      required: false
    },
    {
      as: 'repost_count',
      model: Interactions,
      where: {
        type: 'repost'
      },
      attributes: [],
      duplicating: false,
      required: false
    },]
  }

  includeUser() {
    return {
      model: UserModel,
      attributes: ['name','username','profilePicture']
    }
  }

  includeModel() {
    return {
      interactions: this.includeInteractions(),
      user: this.includeUser()
    }
  }
  
  async getPosts(query) {
    const { user, interactions } = this.includeModel()
    const interactionsAttributes = [
      [fn('COUNT', col('like_count')), 'likes'],
      [fn('COUNT', col('repost_count')), 'reposts']
    ]
    const attributes = ['id', 'content', ...interactionsAttributes]
    const group = ['posts.id', 'user.id']
    const items = await this.findAndCountAll(query, [user, ...interactions], attributes, group)
    return items
  }
}

export default PostBase
