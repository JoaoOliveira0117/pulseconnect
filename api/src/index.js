import express from 'express'
import cors from 'cors'
import { dbInit } from './config/db.js'
import dotenv from 'dotenv'
import validatorMiddleware from './middlewares/validator.js'
import router from './routes/index.js'

const app = express()
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use(cors())

dotenv.config()

await dbInit()

const PORT = process.env.PORT || 3000

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT} 🔥`)
})

app.use('/', validatorMiddleware, router)