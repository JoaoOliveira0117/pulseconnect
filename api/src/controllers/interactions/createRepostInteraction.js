import useController from '../../helpers/useController.js';
import validation from '../../validation/interactions/createInteraction.js';
import InteractionBase from './base.js';

class CreateRepostInteraction extends InteractionBase {
	response() {
		return this.createRepost(this.params.id);
	}
}

export default useController(CreateRepostInteraction, validation);
