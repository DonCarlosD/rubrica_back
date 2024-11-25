import { Router } from "express";
const router = Router();

router.get('/personas');
router.get('/personas/:id');
router.post('/personas');
router.put('/personas/:id');
router.delete('/personas/:id');

export default router;