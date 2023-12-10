import PostBase from './base.js';
import validation from '../../validation/posts/getPostReply.js';

class GetPosts extends PostBase {
	async response() {
		try {
			const { id } = this.req.params;
			const result = await this.getPostReplies({ replyTo: id }, this.req.user.id);
			this.success(result);
		} catch (err) {
			this.fail(err);
		}
	}
}

const getPosts = (req, res) => new GetPosts(req, res).send();
export default [validation, getPosts];
