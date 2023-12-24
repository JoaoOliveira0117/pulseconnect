import PostBase from './base.js';
import validation from '../../validation/posts/getPostReply.js';

class GetPostById extends PostBase {
	response() {
		return this.getPostWithRepliesById(this.params.id);
	}
}

const getPosts = (req, res) => new GetPostById(req, res).send();
export default [validation, getPosts];
