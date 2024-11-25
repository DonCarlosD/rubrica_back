import { Router } from "express";
const router = Router();

router.get('/criterios');
router.post('/criterios');
router.put('/criterios/:id');
router.delete('/criterios/:id');
router.get('/criterios/:id');

export default router;
