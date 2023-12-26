import { param } from 'express-validator';
import Post from '../../models/post';

export const postExists = param('id').custom(async (id) => {
	const post = await Post.findOne({ where: { id } });
	if (!post) {
		throw new Error('Post does not exist');
	}
});
