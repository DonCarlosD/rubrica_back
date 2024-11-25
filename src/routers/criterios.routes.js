import { Router } from "express";
import {getAllCriterios
        ,crearCriterio
} from '../controllers/Criterios.Controller.js';
const router = Router();

router.get('/criterios',getAllCriterios);
router.post('/criterio',crearCriterio);
router.put('/criterios/:id');
router.delete('/criterios/:id');
router.get('/criterios/:id');

export default router;
