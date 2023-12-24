import PostBase from './base.js';

class getPostsWithInteractions extends PostBase {
	response() {
		return this.getPostsWithInteractions();
	}
}

const getPostInteractions = (req, res) => new getPostsWithInteractions(req, res).send();
export default [getPostInteractions];
