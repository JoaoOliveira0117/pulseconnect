import { currentUserHasLiked, currentUserHasReposted, likes, reposts, comments } from './literals.js';

function queryGetPostWithoutPagination(query, userId) {
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
				attributes: ['id', 'name', 'username', 'profilePicture'],
			},
			{
				association: 'interactions',
				required: false,
				attributes: [],
			},
		],
		order: [['createdAt', 'DESC']],
	};
}

export default queryGetPostWithoutPagination;
