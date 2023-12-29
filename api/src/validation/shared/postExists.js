import { param } from 'express-validator';
import Post from '../../models/post.js';
import { mountErrorMessage } from '../../utils/responseHandler.js';

export const postExists = param('id').custom(async (id) => {
	const post = await Post.findOne({ where: { id } });
	if (!post) {
		throw mountErrorMessage('Post does not exist', 404);
	}
});
