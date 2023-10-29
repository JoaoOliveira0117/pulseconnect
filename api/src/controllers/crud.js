import Controller from './controller.js'

class CrudBase extends Controller {
  constructor(req, res, Model) {
    super(req, res)
    this.Model = Model
  }

  getPagination() {
    const { page, size } = this.req.query
    const limit = size ? +size : 10
    const offset = page ? page * limit : 0
    return { limit, offset }
  }

  async create(body) {
    const items = await this.Model.create(body)
    return items
  }

  async findOne(query) {
    const items = await this.Model.findOne(query)
    return items
  }

  async findAndCountAll(query, include, attributes, group) {
    const items = await this.Model.findAll({
      where: query,
      include,
      attributes,
      group,
      order: [['createdAt', 'DESC']],
      ...this.getPagination()
    })
    return items
  }

  async delete(query) {
    const items = await this.Model.destroy({
      where: query
    })
    return items
  }
}

export default CrudBase