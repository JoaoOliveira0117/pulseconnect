import UserBase from './base.js'
import validation from '../../validation/users/updateUser.js'
import uploadImage from '../../services/imgBB.js'
import initMulter from '../../config/multer.js'

class UpdateUser extends UserBase {
  async response() {
    try {
      const {body, file, user} = this.req
      console.log(this.req.file)
      if (file) {
        const { data } = await uploadImage(this.req.file)
        body.profilePicture = data.thumb.url
      }

      const result = this.updateUser(user.id, body)
      this.success(result)
    } catch (err) {
      this.fail(err)
    }
  }
}

const updateUser = (req, res) => new UpdateUser(req, res).send()
export default [validation, initMulter(), updateUser]
