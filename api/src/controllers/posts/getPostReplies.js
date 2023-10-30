import PostBase from './base.js'
import validation from '../../validation/posts/getPostReply.js'

class GetPosts extends PostBase {
  async response() {
    try {
      const { id } = this.req.params
      const posts = await this.getPostReplies({ id })
      this.success({posts})
    } catch (err) {
      this.fail(err)
    }
  }
}

const getPosts = (req, res) => new GetPosts(req, res).send()
export default [validation, getPosts]
