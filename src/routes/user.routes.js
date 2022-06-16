import { Router } from 'express';
import { getAll } from '../controllers/user.controller.js';

const router = Router();

//Rutas
router.get("/", getAll);

export default router;