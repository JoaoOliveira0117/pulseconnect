import useController from '../../helpers/useController.js';
import PostBase from './base.js';

class GetPostsWithInteractions extends PostBase {
	response() {
		return this.getPostsWithInteractions();
	}
}

export default useController(GetPostsWithInteractions);
