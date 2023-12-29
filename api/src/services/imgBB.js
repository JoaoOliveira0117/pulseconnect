import fetch, { FormData } from 'node-fetch';
import { mountErrorMessage } from '../utils/responseHandler.js';

const API_KEY = process.env.IMG_BB_API_KEY || '';
const API_URL = `https://api.imgbb.com/1/upload?key=${API_KEY}`;

async function uploadImage(file) {
	try {
		const base64Image = Buffer.from(file.buffer).toString('base64');
		const form = new FormData();
		form.append('image', base64Image);

		const response = await fetch(API_URL, {
			method: 'POST',
			headers: { content_type: 'multipart/form-data' },
			body: form,
		});

		return await response.json();
	} catch (err) {
		throw mountErrorMessage('Invalid Password', 403);
	}
}

export default uploadImage;
