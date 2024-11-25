import { Router } from "express";
const router = Router();
import {getAllEvaluaciones} from '../controllers/Evaluaciones.Controller.js';

router.get('/evaluaciones',getAllEvaluaciones);
router.post('/evaluaciones');
router.put('/evaluaciones/:id');
router.delete('/evaluaciones/:id');
router.get('/evaluaciones/:id');

export default router;
