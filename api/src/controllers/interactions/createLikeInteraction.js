import validation from '../../validation/interactions/createLikeInteraction.js';
import InteractionBase from './base.js';

class CreateLikeInteraction extends InteractionBase {
	response() {
		return this.createLike(this.query.id);
	}
}

const createLikeInteraction = (req, res) => new CreateLikeInteraction(req, res).send();
export default [validation, createLikeInteraction];
