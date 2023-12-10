import { db } from '../../config/db.js';
import Post from '../../models/post.js';
import CrudBase from '../crud.js';
import queryGetPosts from './queries/queryGetPosts.js';
import queryGetPostsInteractions from './queries/queryGetPostsInteractions.js';

class PostBase extends CrudBase {
	constructor(req, res) {
		super(req, res, Post);
	}

	async createPost(query) {
		return await db.transaction(async (transaction) => {
			const createdPost = await this.create(query, { transaction });
			const post = await this.findOne(queryGetPosts({ id: createdPost.id }, query.userId), { transaction });
			return post;
		});
	}

	async getPosts(query) {
		return this.findAndCountAll(queryGetPosts(query, this.getPagination()));
	}

	async getPostReplies(query, userId) {
		return await this.findAndCountAll(queryGetPosts(query, userId, this.getPagination()));
	}

	async getInteractedPosts() {
		return this.findAndCountAll(queryGetPostsInteractions(this.getPagination()));
	}
}

export default PostBase;
