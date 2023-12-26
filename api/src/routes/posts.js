import { Router } from 'express';
import auth from '../middlewares/auth.js';

import getPosts from '../controllers/posts/getPosts.js';
import getPostById from '../controllers/posts/getPostById.js';
import createPost from '../controllers/posts/createPost.js';
import createReply from '../controllers/posts/createReply.js';
import deletePost from '../controllers/posts/deletePost.js';
import createLikeInteraction from '../controllers/interactions/createLikeInteraction.js';
import createRepostInteraction from '../controllers/interactions/createRepostInteraction.js';
import deleteLikeInteraction from '../controllers/interactions/deleteLikeInteraction.js';
import deleteRepostInteraction from '../controllers/interactions/deleteRepostInteraction.js';
import getPostsWithInteractions from '../controllers/posts/getPostsWithInteractions.js';

const router = Router();

router.use(auth);

router.get('/', ...getPosts);
router.post('/create', ...createPost);
router.post('/create/:id', ...createReply);
router.delete('/delete/:id', ...deletePost);
router.get('/interactions', ...getPostsWithInteractions);

router.post('/like', ...createLikeInteraction);
router.post('/repost', ...createRepostInteraction);

router.delete('/like/:id', ...deleteLikeInteraction);
router.delete('/repost/:id', ...deleteRepostInteraction);

router.get('/:id', ...getPostById);

export default router;
