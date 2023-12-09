import { Router } from 'express';
import updateUser from '../controllers/users/updateUser.js';
import auth from '../middlewares/auth.js';
import getMeUser from '../controllers/users/getMeUser.js';
import getUser from '../controllers/users/getUser.js';

const router = Router();

router.get('/', auth, ...getUser);
router.get('/me', auth, ...getMeUser);
router.post('/update', auth, ...updateUser);

export default router;
