import UserBase from './base.js';
import validation from '../../validation/users/updateUser.js';
import multer from '../../config/multer.js';
import useController from '../../helpers/useController.js';

class UpdateUser extends UserBase {
	response() {
		return this.updateUserById(this.user.id, this.body);
	}
}

export default useController(UpdateUser, validation, multer);
