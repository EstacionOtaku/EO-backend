import { Router } from 'express';
import { getAll, createRecord, getById, updateRecord } from '../controllers/user.controller.js';

const router = Router();

//Rutas
router.get("/", getAll);
router.post("/", createRecord);
router.get("/:id", getById);
router.put("/:id", updateRecord);

export default router;