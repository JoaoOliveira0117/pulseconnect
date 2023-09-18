import PostBase from './base.js'
//import validation from '../../validation/users/createPost.js'

class GetPosts extends PostBase {
  async response() {
    try {
      const posts = await this.findAndCountAll()
      this.success({posts})
    } catch (err) {
      this.fail(err)
    }
  }
}

const getPosts = (req, res) => new GetPosts(req, res).send()
export default [getPosts]
