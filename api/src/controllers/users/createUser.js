import UserBase from './base.js';
import validation from '../../validation/users/createUser.js';
import useController from '../../helpers/useController.js';

class CreateUser extends UserBase {
	response() {
		return this.createUser(this.body);
	}
}

export default useController(CreateUser, validation);
