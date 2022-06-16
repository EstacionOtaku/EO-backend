import { Router } from 'express';
import { getAll, createRecord, getById } from '../controllers/user.controller.js';

const router = Router();

//Rutas
router.get("/", getAll);
router.post("/", createRecord);
router.get("/:id", getById);

export default router;