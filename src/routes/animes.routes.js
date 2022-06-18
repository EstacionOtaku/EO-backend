import { Router } from 'express';
import AnimeController from '../controllers/animes.controller';

const router =Router();
const AnimeController = new AnimeController();

router.get("/", (req, res) => AnimeController.getAll(req, res));

export default router;
