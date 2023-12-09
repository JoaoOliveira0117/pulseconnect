import Post from '../../models/post.js';
import CrudBase from '../crud.js';
import getPostRepliesQuery from './queries/getPostReplies.js';
import { db } from '../../config/db.js';
import buildGetPostById from './queries/getPostById.js';
import buildGetPostsQuery from './queries/getPosts.js';

class PostBase extends CrudBase {
	constructor(req, res) {
		super(req, res, Post);
	}

	async createPost(query) {
		return await db.transaction(async (transaction) => {
			const createdPost = await this.create(query, { transaction });
			const post = await this.findOne(buildGetPostById(createdPost.id, query.userId), { transaction });
			return post;
		});
	}

	async getPosts(query, userId) {
		return this.findAndCountAll({
			include: {
				association: 'users',
				attributes: ['id', 'name', 'username', 'profilePicture'],
				through: { attributes: [] },
			},
		});
	}

	async getInteractedPosts(userId) {
		return this.findAndCountAll({
			include: { association: 'interactions', where: { userId } },
			order: [['interactions', 'createdAt', 'DESC']],
		});
	}

	async getPostReplies(query) {
		return await this.findAndCountAll(getPostRepliesQuery(query.id, this.getPagination()));
	}
}

export default PostBase;
