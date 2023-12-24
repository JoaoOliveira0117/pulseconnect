import InteractionBase from './base.js';

class DeleteLikeInteraction extends InteractionBase {
	response() {
		return this.deleteLike(this.query.id);
	}
}

const deleteLikeInteraction = (req, res) => new DeleteLikeInteraction(req, res).send();
export default [[], deleteLikeInteraction];
