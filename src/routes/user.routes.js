import { Router } from 'express';
import { getAll, createRecord } from '../controllers/user.controller.js';

const router = Router();

//Rutas
router.get("/", getAll);
router.post("/", createRecord);

export default router;