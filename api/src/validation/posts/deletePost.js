import Post from '../../models/post.js'
import { bodyExists } from '../index.js'

export default [
  bodyExists('id').custom(async (id, { req }) => {
    const post = await Post.findOne({ where: { id, userId: req.user.id } })

    if (!post) {
      throw new Error('post does not exist')
    }
  })
]