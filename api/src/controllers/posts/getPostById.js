import PostBase from './base.js';
import validation from '../../validation/posts/getPostReply.js';
import useController from '../../helpers/useController.js';

class GetPostById extends PostBase {
	response() {
		return this.getPostWithRepliesById(this.params.id);
	}
}

export default useController(GetPostById, validation);
