import { Sequelize } from 'sequelize';

// Did not want to use so many literals for this, but for now its the best for me way to get these infos.

export const likes = [
	Sequelize.literal(
		'(SELECT COUNT(*) FROM "interactions_posts_x_users" AS "i" WHERE "i"."postId" = "posts"."id" AND "i"."type" = \'like\')',
	),
	'likes',
];

export const reposts = [
	Sequelize.literal(
		'(SELECT COUNT(*) FROM "interactions_posts_x_users" AS "i" WHERE "i"."postId" = "posts"."id" AND "i"."type" = \'repost\')',
	),
	'reposts',
];

export const comments = [
	Sequelize.literal('(SELECT COUNT(*) FROM "posts" AS "p" WHERE "p"."replyTo" = "posts"."id")'),
	'comments',
];

export const currentUserHasLiked = (userId) => [
	Sequelize.literal(
		`(SELECT COUNT(*) > 0 FROM "interactions_posts_x_users" AS "i" WHERE "i"."postId" = "posts"."id" AND "i"."type" = 'like' AND "i"."userId" = '${userId}')`,
	),
	'currentUserHasLiked',
];

export const currentUserHasReposted = (userId) => [
	Sequelize.literal(
		`(SELECT COUNT(*) > 0 FROM "interactions_posts_x_users" AS "i" WHERE "i"."postId" = "posts"."id" AND "i"."type" = 'repost' AND "i"."userId" = '${userId}')`,
	),
	'currentUserHasReposted',
];

export default { likes, reposts, comments, currentUserHasLiked, currentUserHasReposted };
