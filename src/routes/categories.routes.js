import { Router } from 'express';
import CategoryController from '../controllers/categories.controller';
// import authentication from "../middlewares/authentication";

const router = Router();
const categoryController = new CategoryController();

// router.use(authentication);
router.get("/", (req, res) => categoryController.getAll(req, res));
router.post("/", (req, res) => categoryController.createRecord(req, res));
router.get("/:id", (req, res) => categoryController.getById(req, res));
router.put("/:id", (req, res) => categoryController.updateRecord(req, res));
router.delete("/:id", (req, res) => categoryController.deleteRecord(req, res));

export default router;