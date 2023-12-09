import CrudBase from '../crud.js';
import Interactions from '../../models/interactions_posts_X_users.js';

class InteractionBase extends CrudBase {
	constructor(req, res) {
		super(req, res, Interactions);
	}

	async createInteraction(query) {
		return this.Model.create(query);
	}
}

export default InteractionBase;
