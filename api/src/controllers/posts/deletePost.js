import PostBase from './base.js';
import validation from '../../validation/posts/delete.js';
import useController from '../../helpers/useController.js';

class DeletePost extends PostBase {
	response() {
		return this.deletePostById(this.params.id);
	}
}

export default useController(DeletePost, validation);
