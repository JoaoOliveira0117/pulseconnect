import { Router } from 'express'
import createPost from '../controllers/posts/createPost.js'
import getPosts from '../controllers/posts/getPosts.js'
import deletePost from '../controllers/posts/deletePost.js'
import createLikeInteraction from '../controllers/interactions/createLikeInteraction.js'
import createRepostInteraction from '../controllers/interactions/createRepostInteraction.js'

const router = Router()

router.get('/', ...getPosts)
router.post('/create', ...createPost)
router.delete('/delete/:id', ...deletePost)

router.post('/like', ...createLikeInteraction)
router.post('/repost', ...createRepostInteraction)

export default router