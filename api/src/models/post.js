import { db } from '../config/db.js'
import { DataTypes } from 'sequelize'
import User from './user.js'

const Post = db.define(
  'posts',
  {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
    },
    userId: {
      type: DataTypes.UUID,
      allowNull: false,
    },
    content: {
      type: DataTypes.STRING,
      allowNull: false,
    }
  },
)

User.hasMany(Post)
Post.belongsTo(User, { foreignKey: { name: 'userId', allowNull: false }})

export default Post