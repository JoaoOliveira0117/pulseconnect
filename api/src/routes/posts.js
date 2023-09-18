import { Router } from 'express'
import createPost from '../controllers/posts/createPost.js'
import getPosts from '../controllers/posts/getPosts.js'

const router = Router()

router.get('/', ...getPosts)
router.post('/create', ...createPost)

export default router