import UserBase from './base.js';
import validation from '../../validation/users/getMeUser.js';
import useController from '../../helpers/useController.js';

class GetMeUser extends UserBase {
	response() {
		return this.getUserMe();
	}
}

export default useController(GetMeUser, validation);
