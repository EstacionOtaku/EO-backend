import { Router } from 'express';
import SeasonController from '../controllers/seasons.controller';

const router = Router();
const seasonController = new SeasonController();

router.get("/", (req, res) => seasonController.getAll(req, res));
router.post("/", (req, res) => seasonController.createRecord(req, res));
router.get("/:id", (req, res) => seasonController.getById(req, res));
router.put("/:id", (req, res) => seasonController.updateRecord(req, res));
router.delete("/:id", (req, res) => seasonController.deleteRecord(req, res));

export default router;