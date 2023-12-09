import PostBase from './base.js';

class GetPostInteractions extends PostBase {
	async response() {
		try {
			const result = await this.getInteractedPosts(this.req.user.id);
			this.success(result);
		} catch (err) {
			this.fail(err);
		}
	}
}

const getPostInteractions = (req, res) => new GetPostInteractions(req, res).send();
export default [getPostInteractions];
