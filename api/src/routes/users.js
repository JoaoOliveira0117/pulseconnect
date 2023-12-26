import { Router } from 'express';
import auth from '../middlewares/auth.js';

import updateUser from '../controllers/users/updateUser.js';
import getMeUser from '../controllers/users/getMeUser.js';
import getUser from '../controllers/users/getUser.js';

const router = Router();

router.use(auth);

router.get('/me', ...getMeUser);
router.post('/update', ...updateUser);
router.get('/:id', ...getUser);

export default router;
