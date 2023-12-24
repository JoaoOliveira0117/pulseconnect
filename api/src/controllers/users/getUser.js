import UserBase from './base.js';
import validation from '../../validation/users/getUser.js';

class GetUser extends UserBase {
	response() {
		return this.getUser(this.params.id);
	}
}

const getUser = (req, res) => new GetUser(req, res).send();
export default [validation, getUser];
