import useController from '../../helpers/useController.js';
import validation from '../../validation/interactions/createLikeInteraction.js';
import InteractionBase from './base.js';

class CreateLikeInteraction extends InteractionBase {
	response() {
		return this.createLike(this.query.id);
	}
}

export default useController(CreateLikeInteraction, validation);
