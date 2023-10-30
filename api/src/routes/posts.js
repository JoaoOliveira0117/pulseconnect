import { Router } from 'express'
import getPosts from '../controllers/posts/getPosts.js'
import getPostReplies from '../controllers/posts/getPostReplies.js'
import createPost from '../controllers/posts/createPost.js'
import createReply from '../controllers/posts/createReply.js'
import deletePost from '../controllers/posts/deletePost.js'
import createLikeInteraction from '../controllers/interactions/createLikeInteraction.js'
import createRepostInteraction from '../controllers/interactions/createRepostInteraction.js'

const router = Router()

router.get('/', ...getPosts)
router.get('/:id', ...getPostReplies)
router.post('/create', ...createPost)
router.post('/create/:id', ...createReply)
router.delete('/delete/:id', ...deletePost)

router.post('/like', ...createLikeInteraction)
router.post('/repost', ...createRepostInteraction)

export default router