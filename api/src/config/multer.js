import multer from 'multer'

function initMulter (req, _, next) {
  if (!req.file) {
    next()
  }

  const storage = multer.memoryStorage()
  const upload = multer({ storage: storage })
  return upload.single('file')
}

export default initMulter