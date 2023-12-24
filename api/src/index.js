import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';

import router from './routes/index.js';
import { dbInit } from './config/db.js';

dotenv.config();

await dbInit();

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use('/', router);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
	console.log(`Listening on port ${PORT} 🔥`);
});
