import { validationResult } from 'express-validator'
import error from '../utils/error.js'

class Controller {
  constructor(req, res) {
    this.req = req
    this.res = res
  }

  fail(err, statusCode = 400) {
    const data = {
      params: this.req.params,
      query: this.req.query,
      body: this.req.body
    }
    
    this.res.status(statusCode)
      .json({
        data: data, 
        ...error(err),
        status: statusCode
      })
  }
  
  success(body, statusCode = 201) {
    this.res.status(statusCode)
      .json(body)
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
