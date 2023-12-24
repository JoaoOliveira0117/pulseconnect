import PostBase from './base.js';
import validation from '../../validation/posts/deletePost.js';

class DeletePost extends PostBase {
	response() {
		return this.deletePostById(this.params.id);
	}
}

const deletePost = (req, res) => new DeletePost(req, res).send();
export default [validation, deletePost];
