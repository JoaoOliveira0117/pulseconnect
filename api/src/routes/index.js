import { Router } from 'express';
import users from './users.js';
import posts from './posts.js';
import auth from './auth.js';

const router = Router();

// Routes
router.use('/users', auth);
router.use('/users', users);
router.use('/posts', posts);

export default router;
