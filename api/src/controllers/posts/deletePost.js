import PostBase from './base.js'
import validation from '../../validation/posts/deletePost.js'

class DeletePost extends PostBase {
  async response() {
    try {
      console.log(this.req)
      const { id } = this.req.params
      const deleted = await this.delete({ id })
      this.success({ deleted })
    } catch (err) {
      this.fail(err)
    }
  }
}

const deletePost = (req, res) => new DeletePost(req, res).send()
export default [validation, deletePost]
