import { Router } from "express";
import RoleController from "../controllers/roles.controller";

const router = Router();
const roleController = new RoleController();

// Rutas
router.get("/", (req, res) => roleController.getAll(req, res));
router.post("/", (req, res) => roleController.createRecord(req, res));
router.get("/:id", (req, res) => roleController.getById(req, res));
router.put("/:id", (req, res) => roleController.updateRecord(req, res));
router.delete("/:id", (req, res) => roleController.deleteRecord(req, res));

export default router;
