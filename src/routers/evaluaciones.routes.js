import { Router } from "express";
const router = Router();
import {getAllEvaluaciones,
        createEvaluacion
} from '../controllers/Evaluaciones.Controller.js';

router.get('/evaluaciones',getAllEvaluaciones);
router.post('/evaluacion',createEvaluacion);
router.put('/evaluaciones/:id');
router.delete('/evaluaciones/:id');
router.get('/evaluaciones/:id');

export default router;
