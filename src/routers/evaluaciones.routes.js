import { Router } from "express";
const router = Router();

router.get('/evaluaciones');
router.post('/evaluaciones');
router.put('/evaluaciones/:id');
router.delete('/evaluaciones/:id');
router.get('/evaluaciones/:id');

export default router;
