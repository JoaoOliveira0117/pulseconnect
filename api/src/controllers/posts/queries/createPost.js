import { buildInteractionsQuery, buildUserQuery, buildReplyToQuery } from './base.js'

function buildGetPostsQuery(body) {
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

  return {
    body,
    attributes,
    include
  }
}

export default buildGetPostsQuery