import { currentUserHasLiked, currentUserHasReposted, likes, reposts, comments } from './literals.js';

function queryGetPosts(query, pagination) {
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
			currentUserHasLiked,
			currentUserHasReposted,
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
	};
}

export default queryGetPosts;
