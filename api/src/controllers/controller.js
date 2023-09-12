import { validationResult } from 'express-validator'

class Controller {
  constructor(req, res) {
    this.req = req
    this.res = res
  }

  fail(err, statusCode = 400) {
    this.res.status(statusCode).json(err)
  }
  
  success(body, statusCode = 201) {
    this.res.status(statusCode).json(body)
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
