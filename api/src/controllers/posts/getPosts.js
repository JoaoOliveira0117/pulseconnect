import PostBase from './base.js'

class GetPosts extends PostBase {
  async response() {
    try {
      const result = await this.getPosts({ replyTo: null })
      this.success(result)
    } catch (err) {
      this.fail(err)
    }
  }
}

const getPosts = (req, res) => new GetPosts(req, res).send()
export default [getPosts]
