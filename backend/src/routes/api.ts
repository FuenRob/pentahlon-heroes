import express, { Router } from 'express';
import superheroController from '../controllers/superheroController';
import verifyToken from '../utils/auth';

const router: Router = express.Router();

// Middleware para verificar el token en todas las rutas
router.use(verifyToken);

// Rutas para CRUD de superhéroes
router.get('/superheroes', superheroController.getAll);
router.post('/superheroes', superheroController.create);
router.get('/superheroes/:id', superheroController.getById);
router.put('/superheroes/:id', superheroController.update);
router.delete('/superheroes/:id', superheroController.delete);

export default router;
