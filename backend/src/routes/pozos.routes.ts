import { Router } from 'express';
import {
    getPozos,
    createPozo,
    updateEstadoPozo
} from '../controllers/pozos.controller';

const router = Router();

// Ruta para obtener todos los pozos
router.get('/', getPozos);

// Ruta para crear un nuevo pozo
router.post('/', createPozo);

// Ruta para actualizar el estado de un pozo
router.patch('/:id', updateEstadoPozo);

export default router;