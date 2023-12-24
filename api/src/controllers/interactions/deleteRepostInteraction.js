import InteractionBase from './base.js';

class DeleteRepostInteraction extends InteractionBase {
	response() {
		return this.deleteRepost(this.query.id);
	}
}

const deleteRepostInteraction = (req, res) => new DeleteRepostInteraction(req, res).send();
export default [[], deleteRepostInteraction];
