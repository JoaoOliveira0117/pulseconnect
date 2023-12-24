import CrudBase from '../crud.js';
import Interactions from '../../models/interactions_posts_X_users.js';
import interactions from '../../enums/interactions.js';

class InteractionBase extends CrudBase {
	constructor(req, res) {
		super(req, res, Interactions);
	}

	async createLike(postId) {
		return this.Model.create({ postId, userId: this.user.id, type: interactions.LIKE });
	}

	async createRepost(postId) {
		return this.Model.create({ postId, userId: this.user.id, type: interactions.REPOST });
	}

	async deleteLike(postId) {
		await this.delete({ postId, userId: this.user.id, type: interactions.LIKE });
	}

	async deleteRepost(postId) {
		await this.delete({ postId, userId: this.user.id, type: interactions.REPOST });
	}
}

export default InteractionBase;
