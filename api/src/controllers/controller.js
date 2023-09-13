import { validationResult } from 'express-validator'
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
    const formattedResponse = data(this.req, body, statusCode)
    this.res.status(statusCode)
      .json(formattedResponse)
  }

  response() {}

  async send() {
    const errors = validationResult(this.req)
    if (!errors.isEmpty()) {
      return this.fail({ errors: errors.array() }, 422)
    }

    await this.response()
  }
}

export default Controller
