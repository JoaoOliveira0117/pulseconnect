import { buildInteractionsQuery, buildUserQuery, buildReplyToQuery, buildCurrentUserMetadataQuery } from './base.js';

function buildGetPostById(id, userId) {
	const include = [...buildUserQuery()];

	const attributes = [
		'id',
		'content',
		'replyTo',
		'createdAt',
		'updatedAt',
		...buildInteractionsQuery(),
		...buildReplyToQuery(),
		...buildCurrentUserMetadataQuery(userId),
	];

	return {
		where: { id },
		attributes,
		include,
	};
}

export default buildGetPostById;
