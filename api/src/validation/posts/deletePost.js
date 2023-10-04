import Post from '../../models/post.js'
import { bodyExists } from '../index.js'

export default [
  bodyExists('id').custom(async (id) => {
    const post = await Post.findOne({ where: { id } })

    if (!post) {
      throw new Error('post does not exist')
    }
  })
]