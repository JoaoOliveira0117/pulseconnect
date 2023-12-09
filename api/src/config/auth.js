import jwt from 'jsonwebtoken';
import { config } from 'dotenv';

config();

export const generateToken = (payload) => jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: '1d' });

export const validateToken = (token) => jwt.verify(token, process.env.JWT_SECRET);
