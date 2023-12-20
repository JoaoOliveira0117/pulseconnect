import { db } from '../../config/db.js';
import Post from '../../models/post.js';
import CrudBase from '../crud.js';
import queryGetPosts from './queries/queryGetPosts.js';
import queryGetPostsInteractions from './queries/queryGetPostsInteractions.js';
import queryGetPostWithoutPagination from './queries/queryGetPostWithoutPagination.js';

class PostBase extends CrudBase {
	constructor(req, res) {
		super(req, res, Post);
	}

	async createPost(query) {
		return await db.transaction(async (transaction) => {
			const createdPost = await this.create(query, { transaction });
			const post = await this.findOne(queryGetPosts({ id: createdPost.id }, this.req.user.id, this.getPagination()), {
				transaction,
			});
			return post;
		});
	}

	async getPosts(query) {
		return this.findAndCountAll(queryGetPosts(query, this.req.user.id, this.getPagination()));
	}

	async getPostById(postId) {
		return await db.transaction(async (t) => {
			const post = await this.findOne(queryGetPostWithoutPagination({ id: postId }, this.req.user.id), {
				transaction: t,
			});
			const replies = await this.findAndCountAll(
				queryGetPostWithoutPagination({ replyTo: post.getDataValue('id') }, this.req.user.id),
				{
					transaction: t,
				},
			);

			return { ...post.toJSON(), replies: replies };
		});
	}

	async getInteractedPosts() {
		return this.findAndCountAll(queryGetPostsInteractions(this.req.user.id, this.getPagination()));
	}
}

export default PostBase;
