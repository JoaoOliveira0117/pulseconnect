import multer from 'multer';

function initMulter() {
	const storage = multer.memoryStorage();
	const upload = multer({ storage: storage });
	return upload.single('file');
}

export default initMulter();
