import { Router } from 'express'
import updateUser from '../controllers/users/updateUser.js'
import auth from '../middlewares/auth.js'

const router = Router()

router.post('/update', auth, ...updateUser)

export default router