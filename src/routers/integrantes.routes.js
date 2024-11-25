import { Router } from "express";
const router = Router();
import {allIntegrantes,
        createIntegrante,
} from '../controllers/integrantes.controller.js';

router.get('/integrantes',allIntegrantes);
router.get('/integrantes/:id');
router.post('/integrantes',createIntegrante);
router.put('/integrantes/:id');
router.delete('/integrantes/:id');

export default router;