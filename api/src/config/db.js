import { Sequelize } from 'sequelize'
import dotenv from 'dotenv'

dotenv.config()

export const db = new Sequelize(process.env.DB_URL)

export const dbInit = async () => {
  try {
    console.log('Connecting to Database')
    await db.authenticate()
    console.log('Database connected')
    //console.log('Syncing')
    //await db.sync({ force: true })    
    console.log('DB SUCCESS')
  } catch (error) {
    console.log(error)
  }
}
