import UserBase from './base.js'
// import validation from '../../validation/users/updateUser.js'
import uploadImage from '../../services/imgBB.js'

import multer from 'multer'

const storage = multer.memoryStorage()
const upload = multer({ storage: storage })

class UpdateUser extends UserBase {
  async response() {
    try {
      const {body, file, user} = this.req

      if (file) {
        const { data } = await uploadImage(this.req.file)
        body.profilePicture = data.display_url
      }

      const response = this.updateUser(user.id, body)
      this.success(response)
    } catch (err) {
      this.fail(err)
    }
  }
}

const updateUser = (req, res) => new UpdateUser(req, res).send()
export default [upload.single('file'), updateUser]
