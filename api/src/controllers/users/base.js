import { generateToken } from '../../config/auth.js';
import User from '../../models/user.js';
import uploadImage from '../../services/imgBB.js';
import { mountErrorMessage } from '../../utils/responseHandler.js';
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

		return data.thumb.url;
	}

	#findUser(where, options) {
		return this.findOne({ where }, options);
	}

	async #updateUser(id, fields, options) {
		await this.updateById(id, fields, options);
		return this.#findUser({ id }, options);
	}

	getUserById(id) {
		return this.#findUser({ id });
	}

	getUserMe() {
		return this.#findUser({ id: this.user.id });
	}

	async getUserAndAuthenticate(body) {
		const user = await this.#findUser({ email: body.email });
		const isPasswordValid = await user.validPassword(body.password);

		if (!isPasswordValid) {
			throw mountErrorMessage('Invalid Password', 403);
		}

		const token = generateToken({ id: user.id });
		return { user, token };
	}

	async createUser(body) {
		const user = await this.create(body);
		const token = generateToken({ id: user.id });
		return { user, token };
	}

	async updateUserById(userId, fields) {
		fields.profilePicture = await this.#uploadFile();

		return this.dbInstance.transaction((transaction) => this.#updateUser(userId, fields, { transaction }));
	}
}

export default UserBase;
