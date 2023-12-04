import { db } from '../config/db.js'
import { DataTypes } from 'sequelize'
import User from './user.js'
import Post from './post.js'

const Interactions = db.define(
  'interactions_posts_x_users',
  {
    userId: {
      type: DataTypes.UUID,
      references: {
        model: User,
        key: 'id',
        allowNull: false
      },
      primaryKey: true,
    },
    postId: {
      type: DataTypes.UUID,
      references: {
        model: Post,
        key: 'id',
        allowNull: false
      },
      primaryKey: true,
    },
    type: {
      type: DataTypes.ENUM('like', 'repost'),
      allowNull: false,
      primaryKey: true
    }
  },
)

User.belongsToMany(Post, { through: Interactions })
Post.belongsToMany(User, { through: Interactions })

Post.hasMany(Interactions, { as: 'interactions'})


export default Interactions