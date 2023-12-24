import PostBase from './base.js';

class GetPosts extends PostBase {
	response() {
		return this.getPosts({ replyTo: null });
	}
}

const getPosts = (req, res) => new GetPosts(req, res).send();
export default [getPosts];
