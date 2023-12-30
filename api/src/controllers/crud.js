import { db } from '../config/db.js';
import Controller from './controller.js';

class CrudBase extends Controller {
	constructor(req, res, Model) {
		super(req, res);
		this.dbInstance = db;
		this.Model = Model;
	}

	getPagination() {
		const { page, size } = this.query;
		const limit = size ? +size : 10;
		const offset = page ? page * limit : 0;
		return { limit, offset };
	}

	create(body) {
		return this.Model.create(body);
	}

	findOne(query, options = {}) {
		return this.Model.findOne(query, options);
	}

	findAll(query) {
		return this.Model.findAll(query);
	}

	findAndCountAll(query) {
		return this.Model.findAll(query);
	}

	updateById(id, fields, options = {}) {
		return this.Model.update(fields, { where: { id } }, options);
	}

	delete(where) {
		return this.Model.destroy({ where });
	}

	deleteById(id) {
		return this.Model.destroy({ where: { id } });
	}
}

export default CrudBase;
