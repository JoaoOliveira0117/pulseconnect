import PostBase from './base.js'

class GetPosts extends PostBase {
  async response() {
    try {
      const posts = await this.getPosts()
      this.success({posts})
    } catch (err) {
      this.fail(err)
    }
  }
}

const getPosts = (req, res) => new GetPosts(req, res).send()
export default [getPosts]
