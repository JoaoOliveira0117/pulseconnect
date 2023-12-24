import { generateToken } from '../../config/auth.js';
import User from '../../models/user.js';
import uploadImage from '../../services/imgBB.js';
import CrudBase from '../crud.js';

class UserBase extends CrudBase {
	constructor(req, res) {
		super(req, res, User);
	}

	async #uploadFile() {
		if (!this.file) {
			return;
		}

		const { data } = await uploadImage(this.file);

		return {
			imageUrl: data.thumb.url,
		};
	}

	#findUser(where) {
		const attributes = ['id', 'name', 'username', 'email', 'profilePicture'];
		return this.findOne({ where, attributes });
	}

	getUserById(id) {
		return this.#findUser({ id });
	}

	getUserMe() {
		return this.#findUser({ id: this.user.id });
	}

	async getUserAndAuthenticate(body) {
		const user = await this.#findUser({ where: { email: body.email } });
		const isPasswordValid = await user.validPassword(body.password);

		if (!isPasswordValid) {
			return this.fail('Invalid password', 403);
		}

		const token = generateToken({ id: user.id });
		return { user, token };
	}

	async createUser(body) {
		const user = await this.create(body);
		const token = generateToken({ id: user.id });
		return { user, token };
	}

	updateUserById(userId, fields) {
		fields.profilePicture = this.#uploadFile().imageUrl;

		return this.updateById(userId, fields);
	}
}

export default UserBase;
