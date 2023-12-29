import UserBase from './base.js';
import validation from '../../validation/users/authUser.js';
import useController from '../../helpers/useController.js';

class AuthUser extends UserBase {
	response() {
		return this.getUserAndAuthenticate(this.body);
	}
}

export default useController(AuthUser, validation);
