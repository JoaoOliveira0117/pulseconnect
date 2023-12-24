import PostBase from './base.js';
import validation from '../../validation/posts/createReply.js';

class CreateReply extends PostBase {
	response() {
		return this.createReply(this.body, this.params.id);
	}
}

const createReply = (req, res) => new CreateReply(req, res).send();
export default [validation, createReply];
