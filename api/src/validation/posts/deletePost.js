import Post from '../../models/post.js'
import { propExists } from '../index.js'

export default [
  propExists('id').custom(async (id, { req }) => {
    const post = await Post.findOne({ where: { id, userId: req.user.id } })

    if (!post) {
      throw new Error('post does not exist')
    }
  })
]