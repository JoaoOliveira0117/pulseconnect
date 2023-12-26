import useController from '../../helpers/useController.js';
import validation from '../../validation/interactions/createInteraction.js';
import InteractionBase from './base.js';

class CreateLikeInteraction extends InteractionBase {
	response() {
		return this.createLike(this.params.id);
	}
}

export default useController(CreateLikeInteraction, validation);
