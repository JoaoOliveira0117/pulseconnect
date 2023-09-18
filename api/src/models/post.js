import { db } from '../config/db.js'
import { DataTypes } from 'sequelize'

const Post = db.define(
  'post',
  {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
    },
    content: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    likes: {
      type: DataTypes.INTEGER,
      defaultValue: 0,
    },
    comments: {
      type: DataTypes.INTEGER,
      defaultValue: 0,
    },
    reposts: {
      type: DataTypes.INTEGER,
      defaultValue: 0,
    }
  },
)

Post.hasOne(Post, { foreignKey: 'replyId' })


export default Post