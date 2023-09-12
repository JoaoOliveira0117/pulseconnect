import { DataTypes } from 'sequelize'
import { db } from '../config/db.js'
import { generateHash, compareHash } from '../config/bcrypt.js'

const User = db.define(
  'user',
  {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    username: { type: DataTypes.STRING,
      allowNull: false
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    hooks: {
      beforeCreate: async (user) => {
        if (user.password) {
          user.password = await generateHash(user.password)
        }
      },
      beforeUpdate: async (user) => {
        if (user.password) {
          user.password = await generateHash(user.password)
        }
      }
    },
    instanceMethods: {
      validPassword: (password) => {
        return compareHash(password, this.password)
      }
    }
  }
)

export default User
