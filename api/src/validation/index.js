import Controller from '../controllers/controller.js';
import { query, check, matchedData, validationResult, param } from 'express-validator';

import User from '../models/user.js';
import Post from '../models/post.js';

export const validateExact = () => {
	return (req, res, next) => {
		const errors = validationResult(req);
		const data = matchedData(req);
		const reqKeys = { ...req.body, ...req.params, ...req.query };

		if (!errors.isEmpty()) {
			const errorList = errors.array({ onlyFirstError: true, flatten: true });
			return new Controller(req, res).fail(errorList, 422);
		}

		if (Object.keys(data).length !== Object.keys(reqKeys).length) {
			return new Controller(req, res).fail('Invalid request body', 422);
		}

		return next();
	};
};

export const propExists = (prop) =>
	check(prop).exists()
.withMessage(`${prop} does not exist`)
.notEmpty()
.withMessage(`${prop} is required`);

export const stringExists = (prop) => propExists(prop).isString()
.withMessage(`${prop} is required`);

export const emailExists = (prop) => check(prop).isEmail()
.withMessage(`${prop} is not a valid email`);

export const passwordExists = (prop) =>
	check(prop)
		.isLength({ min: 6 })
		.withMessage(`${prop} is invalid`)
		.matches(/\d/)
		.withMessage(`${prop} should contain at least one number`);

export const queryExists = (prop) => query(prop).exists()
.withMessage(`${prop} is required`);

export const paramExists = (prop) => param(prop).exists()
.withMessage(`${prop} is required`);

export const userExistsWithProp = (prop) =>
	check(prop).custom(async (_, { req }) => {
		const reqKeys = { ...req.body, ...req.params, ...req.query };
		const user = await User.findOne({ where: { [prop]: reqKeys[prop] } });
		if (!user) {
			throw new Error('User does not exist');
		}
	});

export const postExistsWithProp = (prop) =>
	check(prop).custom(async (_, { req }) => {
		const reqKeys = { ...req.body, ...req.params, ...req.query };
		const user = await Post.findOne({ where: { [prop]: reqKeys[prop] } });
		if (!user) {
			throw new Error('Post does not exist');
		}
	});
