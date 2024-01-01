import { Op } from 'sequelize';
import Post from '../../models/post.js';
import CrudBase from '../crud.js';
import queryGetPosts from './queries/queryGetPosts.js';

class PostBase extends CrudBase {
	constructor(req, res) {
		super(req, res, Post);
	}

	#findPost(query, options) {
		return this.findOne(queryGetPosts(query, this.user.id), options);
	}

	#findPosts(query, options) {
		return this.findAll(queryGetPosts(query, this.user.id), options);
	}

	#findAndCountPosts(query, options) {
		return this.findAndCountAll(queryGetPosts(query, this.user.id, this.getPagination()), options);
	}

	#findPostById(id, options) {
		return this.findOne(queryGetPosts({ id }, this.user.id), options);
	}

	getPosts(query) {
		return this.#findAndCountPosts(query);
	}

	getPostsWithInteractions() {
		const query = {
			[Op.or]: {
				'$interactions.type$': { [Op.ne]: null },
				replyTo: { [Op.ne]: null },
			},
		};

		return this.#findAndCountPosts(query);
	}

	getPostWithRepliesById(postId) {
		return this.dbInstance.transaction(async (transaction) => {
			const post = await this.#findPostById(postId, { transaction });
			const replies = await this.#findPosts({ replyTo: post.getDataValue('id') }, { transaction });

			return { ...post.toJSON(), replies };
		});
	}

	createPost(body) {
		return this.dbInstance.transaction(async (transaction) => {
			const options = {
				...body,
				userId: this.user.id,
			};
			const createdPost = await this.create(options, { transaction });

			return this.#findPostById(createdPost.getDataValue('id'), { transaction });
		});
	}

	createReply(body, postId) {
		return this.dbInstance.transaction(async (transaction) => {
			const options = {
				...body,
				replyTo: postId,
				userId: this.user.id,
			};
			const createdReply = await this.create(options, { transaction });

			return this.#findPost({ id: createdReply.getDataValue('id') }, { transaction });
		});
	}

	deletePostById(id) {
		return this.delete({ id, userId: this.user.id });
	}
}

export default PostBase;
