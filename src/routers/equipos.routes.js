import { Router } from "express";
const router = Router();
import {allEquipos,
        createEquipo} from '../controllers/equipos.controller.js'

router.get('/equipos',allEquipos);
router.post('/equipo',createEquipo);
router.put('/equipos/:id');
router.delete('/equipos/:id');
router.get('/equipos/:id');

export default router;