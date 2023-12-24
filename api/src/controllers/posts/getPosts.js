import useController from '../../helpers/useController.js';
import PostBase from './base.js';

class GetPosts extends PostBase {
	response() {
		return this.getPosts({ replyTo: null });
	}
}

export default useController(GetPosts);
