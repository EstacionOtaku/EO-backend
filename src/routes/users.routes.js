import { Router } from "express";
import UserController from "../controllers/users.controller";
import authentication from "../middlewares/authentication";

const router = Router();
const userController = new UserController();

router.use(authentication);
router.get("/", (req, res) => userController.getAll(req, res));
router.get("/:id", (req, res) => userController.getById(req, res));
router.put("/:id", (req, res) => userController.updateRecord(req, res));
router.delete("/:id", (req, res) => userController.deleteRecord(req, res));

export default router;
