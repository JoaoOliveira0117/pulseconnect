import PostBase from './base.js';
import validation from '../../validation/posts/getPostReply.js';

class GetPostById extends PostBase {
	async response() {
		try {
			const { id } = this.req.params;
			const result = await this.getPostById(id);
			this.success(result);
		} catch (err) {
			this.fail(err);
		}
	}
}

const getPosts = (req, res) => new GetPostById(req, res).send();
export default [validation, getPosts];
