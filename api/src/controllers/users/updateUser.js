import UserBase from './base.js';
import validation from '../../validation/users/updateUser.js';
import multer from '../../config/multer.js';

class UpdateUser extends UserBase {
	response() {
		return this.updateUserById(this.user.id, this.body);
	}
}

const updateUser = (req, res) => new UpdateUser(req, res).send();
export default [validation, multer, updateUser];
