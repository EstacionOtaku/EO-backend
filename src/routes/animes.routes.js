import { Router } from 'express';
import AnimeController from '../controllers/animes.controller';
// import authentication from "../middlewares/authentication";

const router = Router();
const animeController = new AnimeController();

// router.use(authentication);
router.get("/", (req, res) => animeController.getAll(req, res));
router.post("/", (req, res) => animeController.createRecord(req, res));
router.get("/:id", (req, res) => animeController.getById(req, res));
router.put("/:id", (req, res) => animeController.updateRecord(req, res));
router.delete("/:id", (req, res) => animeController.deleteRecord(req, res));

export default router;
