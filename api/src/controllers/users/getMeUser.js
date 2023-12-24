import UserBase from './base.js';
import validation from '../../validation/users/getMeUser.js';

class GetMeUser extends UserBase {
	response() {
		return this.getUserMe();
	}
}

const getMeUser = (req, res) => new GetMeUser(req, res).send();
export default [validation, getMeUser];
