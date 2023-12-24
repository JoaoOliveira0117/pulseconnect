import UserBase from './base.js';
import validation from '../../validation/users/authUser.js';

class AuthUser extends UserBase {
	async response() {
		return this.getUserAndAuthenticate(this.body);
	}
}

const authUser = (req, res) => new AuthUser(req, res).send();
export default [validation, authUser];
