import PostBase from './base.js';
import validation from '../../validation/posts/createPost.js';
import useController from '../../helpers/useController.js';

class CreatePost extends PostBase {
	response() {
		return this.createPost(this.body);
	}
}

export default useController(CreatePost, validation);
