import { fn, col, literal } from 'sequelize'
import User from '../../../models/user.js'
import Interactions from '../../../models/interactions_posts_X_users.js'

export function buildReplyToQuery() {
  const attributes = [
    [
      literal(`(
          SELECT COUNT(*)
          FROM posts AS p
          WHERE p."replyTo" = posts.id
      )`),
      'replies'
    ]
  ]

  return { attributes }
}

export function buildInteractionsQuery() {
  const attributes = [
    [fn('COUNT', col('like_count')), 'likes'],
    [fn('COUNT', col('repost_count')), 'reposts']
  ]

  const query =[{
    as: 'like_count',
    model: Interactions,
    where: {
      type: 'like'
    },
    attributes: [],
    duplicating: false,
    required: false
  },
  {
    as: 'repost_count',
    model: Interactions,
    where: {
      type: 'repost'
    },
    attributes: [],
    duplicating: false,
    required: false
  }]

  return { attributes, query }
}

export function buildUserQuery() {
  const attributes = []
  const query = [{
    model: User,
    attributes: ['id', 'name','username','profilePicture']
  }]
  return { attributes, query }
}