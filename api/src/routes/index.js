import { Router } from 'express'
import users from './users.js'
//import auth from '../middlewares/auth.js'

const router = Router()

// Routes
router.use('/users', users)

export default router