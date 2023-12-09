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
Post.belongsTo(User, { foreignKey: { name: 'userId', allowNull: false } });

Post.belongsTo(Post, { foreignKey: { name: 'replyTo', allowNull: true } });

export default Post;
