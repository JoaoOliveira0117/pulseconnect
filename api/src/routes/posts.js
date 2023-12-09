import { Router } from 'express';
import getPosts from '../controllers/posts/getPosts.js';
import getPostReplies from '../controllers/posts/getPostReplies.js';
import createPost from '../controllers/posts/createPost.js';
import createReply from '../controllers/posts/createReply.js';
import deletePost from '../controllers/posts/deletePost.js';
import createLikeInteraction from '../controllers/interactions/createLikeInteraction.js';
import createRepostInteraction from '../controllers/interactions/createRepostInteraction.js';
import deleteLikeInteraction from '../controllers/interactions/deleteLikeInteraction.js';
import deleteRepostInteraction from '../controllers/interactions/deleteRepostInteraction.js';
import getPostInteractions from '../controllers/posts/getPostInteractions.js';

const router = Router();

router.get('/', ...getPosts);
router.post('/create', ...createPost);
router.post('/create/:id', ...createReply);
router.delete('/delete/:id', ...deletePost);
router.get('/interactions', ...getPostInteractions);

router.post('/like', ...createLikeInteraction);
router.post('/repost', ...createRepostInteraction);

router.delete('/like', ...deleteLikeInteraction);
router.delete('/repost', ...deleteRepostInteraction);

router.get('/:id', ...getPostReplies);

export default router;
