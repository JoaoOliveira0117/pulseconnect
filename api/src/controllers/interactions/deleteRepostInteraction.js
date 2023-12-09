import InteractionBase from './base.js';

class DeleteRepostInteraction extends InteractionBase {
	async response() {
		try {
			const { query, user } = this.req;
			const result = await this.delete({ postId: query.id, userId: user.id, type: 'repost' });
			this.success({ result });
		} catch (err) {
			this.fail(err);
		}
	}
}

const deleteRepostInteraction = (req, res) => new DeleteRepostInteraction(req, res).send();
export default [[], deleteRepostInteraction];
