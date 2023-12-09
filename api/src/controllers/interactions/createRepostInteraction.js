import validation from '../../validation/interactions/createRepostInteraction.js';
import InteractionBase from './base.js';

class CreateRepostInteraction extends InteractionBase {
	async response() {
		try {
			const { query, user } = this.req;
			const result = await this.create({ postId: query.id, userId: user.id, type: 'repost' });
			this.success({ result });
		} catch (err) {
			this.fail(err);
		}
	}
}

const createRepostInteraction = (req, res) => new CreateRepostInteraction(req, res).send();
export default [validation, createRepostInteraction];
