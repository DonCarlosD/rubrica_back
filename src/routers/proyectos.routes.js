import { Router } from "express";
const router = Router();
import {createProyecto,allproyectos} from '../controllers/proyectos.controller.js'

router.get('/proyectos',allproyectos);
router.post('/proyecto',createProyecto);
router.put('/proyectos/:id');
router.delete('/proyectos/:id');
router.get('/proyectos/:id');

export default router;
