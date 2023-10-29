import { Router } from 'express'
import users from './users.js'
import posts from './posts.js'
import authRoutes from './auth.js'
import auth from '../middlewares/auth.js'


const router = Router()

// Routes
router.use('/users', authRoutes)
router.use('/users', auth, users)
router.use('/posts', auth, posts)

export default router