import validation from '../../validation/interactions/createRepostInteraction.js';
import InteractionBase from './base.js';

class CreateRepostInteraction extends InteractionBase {
	response() {
		return this.createRepost(this.query.id);
	}
}

const createRepostInteraction = (req, res) => new CreateRepostInteraction(req, res).send();
export default [validation, createRepostInteraction];
