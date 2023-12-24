import UserBase from './base.js';
import validation from '../../validation/users/getUser.js';
import useController from '../../helpers/useController.js';

class GetUser extends UserBase {
	response() {
		return this.getUser(this.params.id);
	}
}

export default useController(GetUser, validation);
