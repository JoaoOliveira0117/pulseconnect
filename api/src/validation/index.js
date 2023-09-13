import { check } from 'express-validator'

export const bodyExists = (prop) => check(prop)
  .exists()
  .withMessage(`${prop} does not exist`)
  .notEmpty()
  .withMessage(`${prop} should not be empty`)

export const stringExists = (prop) => bodyExists(prop)
  .isString()
  .withMessage(`${prop} should be a valid string`)

export const emailExists = (prop) => check(prop)
  .isEmail()
  .withMessage(`${prop} should be a valid email`)

export const passwordExists = (prop) => check(prop)
  .isLength({min: 6})
  .withMessage(`${prop} should be a valid password`)
  .matches(/\d/)
  .withMessage(`${prop} should contain at least one number`)