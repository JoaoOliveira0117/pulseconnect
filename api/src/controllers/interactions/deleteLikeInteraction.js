import useController from '../../helpers/useController.js';
import InteractionBase from './base.js';

class DeleteLikeInteraction extends InteractionBase {
	response() {
		return this.deleteLike(this.query.id);
	}
}

export default useController(DeleteLikeInteraction);
