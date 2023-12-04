import InteractionBase from '../interactions/base.js'

class GetInteractions extends InteractionBase {
  async response() {
    try {
      const result = await this.getInteractions()
      this.success(result)
    } catch (err) {
      this.fail(err)
    }
  }
}

const getInteractions = (req, res) => new GetInteractions(req, res).send()
export default [getInteractions]
