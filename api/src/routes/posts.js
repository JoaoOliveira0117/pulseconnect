import { Router } from 'express'
import createPost from '../controllers/posts/createPost.js'
import getPosts from '../controllers/posts/getPosts.js'
import deletePost from '../controllers/posts/deletePost.js'

const router = Router()

router.get('/', ...getPosts)
router.post('/create', ...createPost)
router.delete('/delete/:id', ...deletePost)

export default router