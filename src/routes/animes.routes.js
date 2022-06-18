import { Router } from 'express';
import AnimeController from '../controllers/animes.controller';

const router = Router();
const animeController = new AnimeController();

router.get("/", (req, res) => animeController.getAll(req, res));

export default router;
