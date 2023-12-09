import { Router } from 'express';
import createUser from '../controllers/users/createUser.js';
import authUser from '../controllers/users/authUser.js';

const router = Router();

router.post('/', ...createUser);
router.post('/login', ...authUser);

export default router;
