import { Router } from 'express'
import users from './users.js'
import posts from './posts.js'
import auth from '../middlewares/auth.js'

const router = Router()

// Routes
router.use('/users', users)
router.use('/posts', auth, posts)

export default router