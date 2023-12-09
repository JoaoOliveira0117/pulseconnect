import User from '../../models/user.js';
import CrudBase from '../crud.js';

class UserBase extends CrudBase {
	constructor(req, res) {
		super(req, res, User);
	}

	async getUser(body) {
		const attributes = ['id', 'name', 'username', 'email', 'profilePicture'];
		console.log(body);
		const user = await this.findOne({ where: body, attributes });
		return user;
	}

	async updateUser(userId, body) {
		const user = await this.Model.update(body, { where: { id: userId } });
		return user;
	}
}

export default UserBase;
