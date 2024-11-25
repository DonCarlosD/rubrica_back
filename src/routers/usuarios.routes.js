import { Router } from "express";
const router = Router();
import {createUsuario,
        allUsuarios,
} from '../controllers/usuarios.controller.js';

router.get('/usuarios',allUsuarios);
router.get('/usuarios/:id');
router.post('/usuario',createUsuario);
router.put('/usuarios/:id');
router.delete('/usuarios/:id');

export default router;
