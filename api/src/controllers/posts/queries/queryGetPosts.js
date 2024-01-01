import { currentUserHasLiked, currentUserHasReposted, likes, reposts, comments } from './literals.js';

function queryGetPosts(query, userId, pagination) {
	const aditionalOptions = {};

	if (pagination && pagination.limit && pagination.offset) {
		aditionalOptions.pagination = pagination;
		aditionalOptions.group = ['posts.id', 'user.id', 'interactions.userId', 'interactions.postId', 'interactions.type'];
	}

	return {
		where: query,
		attributes: [
			'id',
			'content',
			'userId',
			'replyTo',
			'createdAt',
			'updatedAt',
			likes,
			reposts,
			comments,
			currentUserHasLiked(userId),
			currentUserHasReposted(userId),
		],
		include: [
			{
				association: 'user',
			},
			{
				association: 'replies',
				attributes: [],
			},
			{
				association: 'interactions',
				order: ['createdAt', 'DESC'],
				attributes: [],
			},
		],
		order: [
			['createdAt', 'DESC'],
			['interactions', 'createdAt', 'DESC'],
		],
		...aditionalOptions,
	};
}

export default queryGetPosts;
