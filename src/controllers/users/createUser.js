import UserBase from './base.js';

class CreateUser extends UserBase {
  async response() {
    try {
      const { body } = this.req;
      const user = await this.create(body);
      this.success(user);
    } catch (err) {
      this.fail(err);
    }
  }
}

export default (req, res) => new CreateUser(req, res).response();
