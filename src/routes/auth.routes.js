import { Router } from "express";
import AuthController from "../controllers/auth.controller";
import validation from "../middlewares/validation";
import {
  authSignUpSchema,
  authSignInSchema,
} from "../validations/auth.validation";

const router = Router();
const authController = new AuthController();

router.post("/signup", validation(authSignUpSchema), (req, res) =>
  authController.signUp(req, res)
);

router.post("/signin", validation(authSignInSchema), (req, res) =>
  authController.signIn(req, res)
);

router.post("/token/refresh", (req, res) =>
  authController.refreshToken(req, res)
);

export default router;
