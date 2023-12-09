import UserBase from './base.js';
import validation from '../../validation/users/getUser.js';

class GetUser extends UserBase {
	async response() {
		try {
			const { id } = this.req.query;
			const result = await this.getUser({ id });
			this.success(result);
		} catch (err) {
			this.fail(err);
		}
	}
}

const getUser = (req, res) => new GetUser(req, res).send();
export default [validation, getUser];
