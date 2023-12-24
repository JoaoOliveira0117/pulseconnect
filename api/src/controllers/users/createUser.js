import UserBase from './base.js';
import validation from '../../validation/users/createUser.js';

class CreateUser extends UserBase {
	response() {
		return this.createUser(this.body);
	}
}

const createUser = (req, res) => new CreateUser(req, res).send();
export default [validation, createUser];
