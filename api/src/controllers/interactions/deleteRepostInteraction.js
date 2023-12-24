import useController from '../../helpers/useController.js';
import InteractionBase from './base.js';

class DeleteRepostInteraction extends InteractionBase {
	response() {
		return this.deleteRepost(this.query.id);
	}
}

export default useController(DeleteRepostInteraction);
