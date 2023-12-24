import PostBase from './base.js';
import validation from '../../validation/posts/createReply.js';
import useController from '../../helpers/useController.js';

class CreateReply extends PostBase {
	response() {
		return this.createReply(this.body, this.params.id);
	}
}

export default useController(CreateReply, validation);
