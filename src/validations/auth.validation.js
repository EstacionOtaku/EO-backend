import { body } from "express-validator";

const authSignUpSchema = [
  body("username").notEmpty().withMessage("Username is required"),
  body("email").notEmpty().withMessage("Email is required"),
  body("password").notEmpty().withMessage("Password is required"),
];

const authSignInSchema = [
  body("username").notEmpty().withMessage("Username is required"),
  body("password").notEmpty().withMessage("Password is required"),
];

export { authSignUpSchema, authSignInSchema };
