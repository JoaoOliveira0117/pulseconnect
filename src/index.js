import express from 'express'
import { dbInit } from './config/db.js'
import dotenv from 'dotenv'
import router from './routes/index.js'

const app = express()
app.use(express.json())

dotenv.config()

await dbInit()

const PORT = process.env.PORT || 3000

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT} 🔥`)
})

app.use('/', router)