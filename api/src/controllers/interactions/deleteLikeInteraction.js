import useController from '../../helpers/useController.js';
import validation from '../../validation/interactions/deleteInteraction.js';
import InteractionBase from './base.js';

class DeleteLikeInteraction extends InteractionBase {
	response() {
		return this.deleteLike(this.params.id);
	}
}

export default useController(DeleteLikeInteraction, validation);
