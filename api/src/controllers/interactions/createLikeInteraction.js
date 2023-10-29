import validation from '../../validation/interactions/createLikeInteraction.js'
import InteractionBase from './base.js'

class CreateLikeInteraction extends InteractionBase {
  async response() {
    try {
      const { query, user } = this.req
      const result = await this.create({ postId: query.id, userId: user.id, type: 'like' })
      this.success({ result })
    } catch (err) {
      this.fail(err)
    }
  }
}

const createLikeInteraction = (req, res) => new CreateLikeInteraction(req, res).send()
export default [validation, createLikeInteraction]
