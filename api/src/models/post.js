import { db } from '../config/db.js';
import { DataTypes } from 'sequelize';
import User from './user.js';

const Post = db.define('posts', {
	id: {
		type: DataTypes.UUID,
		defaultValue: DataTypes.UUIDV4,
		primaryKey: true,
	},
	content: {
		type: DataTypes.STRING,
		allowNull: false,
	},
	userId: {
		type: DataTypes.UUID,
		allowNull: false,
	},
	replyTo: {
		type: DataTypes.UUID,
		allowNull: true,
	},
});

User.hasMany(Post);
Post.belongsTo(User, { as: 'user' });

Post.belongsTo(Post, { foreignKey: { name: 'replyTo', allowNull: true } });
Post.hasMany(Post, { foreignKey: { name: 'replyTo' }, as: 'replies' });

export default Post;
