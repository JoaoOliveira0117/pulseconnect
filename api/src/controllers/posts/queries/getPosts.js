import { buildInteractionsQuery, buildUserQuery, buildReplyToQuery, buildCurrentUserMetadataQuery } from './base.js'

function buildGetPostsQuery(query, userId, pagination) {
  const { limit, offset } = pagination
  const include = [
    ...buildUserQuery()
  ]

  const attributes = [
    'id',
    'content',
    'replyTo',
    ...buildInteractionsQuery(),
    ...buildReplyToQuery(),
    ...buildCurrentUserMetadataQuery(userId)
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