import InteractionBase from './base.js';

class DeleteLikeInteraction extends InteractionBase {
	async response() {
		try {
			const { query, user } = this.req;
			const result = await this.delete({ postId: query.id, userId: user.id, type: 'like' });
			this.success({ result });
		} catch (err) {
			this.fail(err);
		}
	}
}

const deleteLikeInteraction = (req, res) => new DeleteLikeInteraction(req, res).send();
export default [[], deleteLikeInteraction];
