class Controller {
  constructor(req, res) {
    this.req = req;
    this.res = res;
  }

  fail(err, statusCode = 400) {
    this.res.status(statusCode).json(err);
  }
  
  success(body, statusCode = 201) {
    this.res.status(statusCode).json(body);
  }

  response() {}
}

export default Controller;
