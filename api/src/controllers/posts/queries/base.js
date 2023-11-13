import { literal } from 'sequelize'
import User from '../../../models/user.js'

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

  return attributes
}

export function buildInteractionsQuery() {
  const attributes = [
    [literal(`(
      SELECT COUNT(*)
      FROM interactions_posts_x_users AS i
      WHERE i."postId" = posts.id
      AND i."type" = 'like'
    )`),
    'likes'],
    [literal(`(
      SELECT COUNT(*)
      FROM interactions_posts_x_users AS i
      WHERE i."postId" = posts.id
      AND i."type" = 'repost'
    )`),
    'reposts']
  ]

  return attributes
}

export function buildCurrentUserMetadataQuery(userId) {
  const attributes = [
    [literal(`(
    SELECT (COUNT(*) != 0)
    FROM interactions_posts_x_users AS i
    WHERE i."postId" = posts.id
    AND i."type" = 'like'
    AND i."userId" = '${userId}'
  )`),
    'currentUserHasLiked'],
    [literal(`(
      SELECT (COUNT(*) != 0)
      FROM interactions_posts_x_users AS i
      WHERE i."postId" = posts.id
      AND i."type" = 'repost'
      AND i."userId" = '${userId}'
    )`),
    'currentUserHasReposted']
  ]

  return attributes
}

export function buildUserQuery() {
  const query = [{
    model: User,
    attributes: ['id', 'name','username','profilePicture']
  }]
  return query
}