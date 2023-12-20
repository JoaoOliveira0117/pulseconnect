import { Sequelize } from 'sequelize';
import dotenv from 'dotenv';
import config from '../../config.cjs';

dotenv.config();

export const db = new Sequelize(config[process.env.NODE_ENV]);

export const dbInit = async () => {
	try {
		console.log('Connecting to Database');
		await db.authenticate();
		console.log('Database connected');
	} catch (error) {
		console.log(error);
	}
};
