import { handleData, handleError } from '../utils/responseHandler.js';

class Controller {
	constructor(req, res) {
		this.req = req;
		this.file = req.file;
		this.query = req.query;
		this.params = req.params;
		this.user = req.user;
		this.body = req.body;
		this.res = res;
	}

	#sendResponse(body, status = 500) {
		this.res.status(status).json(body);
	}

	fail(error, statusCode = 400) {
		this.#sendResponse(handleError(error, statusCode), statusCode);
	}

	success(body, statusCode = 201) {
		this.#sendResponse(handleData(body, statusCode), statusCode);
	}

	response() {}

	async send() {
		try {
			const response = await this.response();
			this.success({ response });
		} catch (err) {
			this.fail(err);
		}
	}
}

export default Controller;
