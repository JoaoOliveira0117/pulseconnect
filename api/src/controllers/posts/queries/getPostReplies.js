import { buildUserQuery, buildInteractionsQuery, buildReplyToQuery } from './base.js';

function buildGetPostRepliesQuery(query, pagination) {
	const { limit, offset } = pagination;
	const include = [...buildUserQuery().query, ...buildInteractionsQuery().query];

	const attributes = [
		'id',
		'content',
		'replyTo',
		...buildUserQuery().attributes,
		...buildInteractionsQuery().attributes,
		...buildReplyToQuery().attributes,
	];

	const order = [['createdAt', 'DESC']];
	const group = ['posts.id', 'user.id'];

	return {
		where: {
			replyTo: query,
		},
		attributes,
		include,
		order,
		group,
		limit,
		offset,
	};
}

export default buildGetPostRepliesQuery;
