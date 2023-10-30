import PostBase from './base.js'
import validation from '../../validation/posts/createReply.js'

class CreateReply extends PostBase {
  async response() {
    try {
      const { body, params, user } = this.req
      const post = await this.create({ ...body, userId: user.id, replyTo: params.id })
      this.success({post})
    } catch (err) {
      this.fail(err)
    }
  }
}

const createReply = (req, res) => new CreateReply(req, res).send()
export default [validation, createReply]
