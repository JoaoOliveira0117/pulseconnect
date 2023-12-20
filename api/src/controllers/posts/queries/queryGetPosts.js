import { currentUserHasLiked, currentUserHasReposted, likes, reposts, comments } from './literals.js';

function queryGetPosts(query, userId, pagination) {
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
		pagination,
		group: ['posts.id', 'user.id', 'interactions.userId', 'interactions.postId', 'interactions.type'],
		order: [['createdAt', 'DESC']],
	};
}

export default queryGetPosts;
