import useController from '../../helpers/useController.js';
import validation from '../../validation/interactions/createRepostInteraction.js';
import InteractionBase from './base.js';

class CreateRepostInteraction extends InteractionBase {
	response() {
		return this.createRepost(this.query.id);
	}
}

export default useController(CreateRepostInteraction, validation);
