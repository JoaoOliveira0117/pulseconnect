import useController from '../../helpers/useController.js';
import validation from '../../validation/interactions/deleteInteraction.js';
import InteractionBase from './base.js';

class DeleteRepostInteraction extends InteractionBase {
	response() {
		return this.deleteRepost(this.params.id);
	}
}

export default useController(DeleteRepostInteraction, validation);
