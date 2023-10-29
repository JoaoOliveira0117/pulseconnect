import { check } from 'express-validator'

export const propExists = (prop) => check(prop)
  .exists()
  .withMessage(`${prop} does not exist`)
  .notEmpty()
  .withMessage(`${prop} is required`)

export const stringExists = (prop) => propExists(prop)
  .isString()
  .withMessage(`${prop} is required`)

export const emailExists = (prop) => check(prop)
  .isEmail()
  .withMessage(`${prop} is not a valid email`)

export const passwordExists = (prop) => check(prop)
  .isLength({min: 6})
  .withMessage(`${prop} is invalid`)
  .matches(/\d/)
  .withMessage(`${prop} should contain at least one number`)