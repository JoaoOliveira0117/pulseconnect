import { data, error} from '../utils/responseHandler.js'

class Controller {
  constructor(req, res) {
    this.req = req
    this.res = res
  }

  fail(err, statusCode = 400) {
    const formattedError = error(this.req, err, statusCode)
    this.res.status(statusCode)
      .json(formattedError)
  }
  
  success(body, statusCode = 201) {
    const response = data(this.req, body, statusCode)
    this.res.status(statusCode)
      .json(response)
  }

  response() {}

  async send() {
    await this.response()
  }
}

export default Controller
