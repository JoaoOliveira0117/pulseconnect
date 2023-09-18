import PostBase from './base.js'
//import validation from '../../validation/users/createPost.js'

class CreatePost extends PostBase {
  async response() {
    try {
      const { body, user } = this.req
      console.log({...body, userId: user.id})
      const post = await this.create({...body, userId: user.id})
      this.success({post})
    } catch (err) {
      this.fail(err)
    }
  }
}

const createPost = (req, res) => new CreatePost(req, res).send()
export default [createPost]
