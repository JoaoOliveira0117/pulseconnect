import PostBase from './base.js';
import validation from '../../validation/posts/createPost.js';

class CreatePost extends PostBase {
	response() {
		return this.createPost(this.body);
	}
}

const createPost = (req, res) => new CreatePost(req, res).send();
export default [validation, createPost];
