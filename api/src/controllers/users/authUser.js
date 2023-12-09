import UserBase from './base.js';
import validation from '../../validation/users/authUser.js';
import { generateToken } from '../../config/auth.js';

class AuthUser extends UserBase {
	async response() {
		try {
			const { email, password } = this.req.body;
			const user = await this.findOne({ where: { email } });
			const isPasswordValid = await user.validPassword(password);

			if (!isPasswordValid) {
				return this.fail('Invalid password', 403);
			}

			const token = generateToken({ id: user.id });
			this.success({ user, token });
		} catch (err) {
			this.fail(err);
		}
	}
}

const authUser = (req, res) => new AuthUser(req, res).send();
export default [validation, authUser];
