import { Router } from 'express';
import EpisodesController from '../controllers/episodes.controller';
// import authentication from "../middlewares/authentication";

const router = Router();
const episodeController = new EpisodesController();

// router.use(authentication);
router.get("/", (req, res) => episodeController.getAll(req, res));
router.post("/", (req, res) => episodeController.createRecord(req, res));
router.get("/:id", (req, res) => episodeController.getById(req, res));
router.put("/:id", (req, res) => episodeController.updateRecord(req, res));
router.delete("/:id", (req, res) => episodeController.deleteRecord(req, res));

export default router;