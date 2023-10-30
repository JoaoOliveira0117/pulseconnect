import { buildInteractionsQuery, buildUserQuery, buildReplyToQuery } from './base.js'

function buildGetPostsQuery(query, pagination) {
  const { limit, offset } = pagination
  const include = [
    ...buildUserQuery().query,
    ...buildInteractionsQuery().query,
  ]

  const attributes = [
    'id',
    'content',
    'replyTo',
    ...buildUserQuery().attributes,
    ...buildInteractionsQuery().attributes,
    ...buildReplyToQuery().attributes
  ]

  const order = [['createdAt', 'DESC']]
  const group = ['posts.id', 'user.id']

  return {
    where: query,
    attributes,
    include,
    order,
    group,
    limit,
    offset
  }
}

export default buildGetPostsQuery