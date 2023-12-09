export default [
	(req, _, next) => {
		if (!req.user) {
			throw new Error('user not found, probably because user is not logged in');
		}

		next();
	},
]; // This probably isnt needed because auth middleware is already going to take care of this.
