import { Op } from 'sequelize';
import { currentUserHasLiked, currentUserHasReposted, likes, reposts, comments } from './literals.js';

function queryGetPostsInteractions(pagination) {
	return {
		where: {
			[Op.or]: {
				'$interactions.type$': { [Op.ne]: null },
				replyTo: { [Op.ne]: null },
			},
		},
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
				association: 'replies',
				attributes: [],
			},
			{
				association: 'interactions',
				attributes: [],
			},
		],
		order: [['interactions', 'createdAt', 'DESC']],
		group: ['posts.id', 'user.id', 'interactions.userId', 'interactions.postId', 'interactions.type'],
		pagination,
	};
}

export default queryGetPostsInteractions;
