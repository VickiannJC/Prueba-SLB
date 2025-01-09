import { Request, Response } from 'express';
import { pool } from '../db/db.config';

// Obtener lita de pozos de la base de datos
export const getPozos = async (req: Request, res: Response) => {
    try {
        console.log('Ejecutando consulta: SELECT * FROM pozos');
        const result = await pool.query('SELECT * FROM pozos');
        console.log('Resultado de la consulta:', result.rows);
        res.json(result.rows);
    } catch (error) {
        console.error('Error al obtener los pozos:', error);
        res.status(500).json({ message: 'Error al obtener los pozos' });
    }
};

// Añadir un nuevo pozo a la lista
/*
Estructura de la tabla de la base de datos 
 TABLE pozos (
    id SERIAL PRIMARY KEY,             -- ID único para cada pozo (auto-incremental)
    nombre VARCHAR(100) NOT NULL,      -- Nombre del pozo
    ubicacion VARCHAR(100) NOT NULL,   -- Ubicación del pozo
    produccion_diaria NUMERIC NOT NULL, -- Producción diaria en barriles
    estado VARCHAR(10) CHECK (estado IN ('activo', 'inactivo')) NOT NULL -- Estado del pozo (activo/inactivo)
);
*/ 
export const createPozo = async (req: Request, res: Response) => {
    const { nombre, ubicacion, produccion_diaria, estado } = req.body;
    try {
        const result = await pool.query(
            'INSERT INTO pozos (nombre, ubicacion, produccion_diaria, estado) VALUES ($1, $2, $3, $4) RETURNING *',
            [nombre, ubicacion, produccion_diaria, estado]
        );
        res.status(201).json(result.rows[0]);
    } catch (error) {
        console.error('Error al crear el pozo:', error);
        res.status(500).json({ message: 'Error al crear el pozo' });
    }
};


// Actualizar el estado de un pozo
export const updateEstadoPozo = async (req: Request<{ id: string }, {}, { estado: string }>, res: Response): Promise<void> => {
    //El uso de Request y Response permite tener control sobre los tipos de las propiedades de req y res 
    //Esto permite evitar errores y conflictos en los tipos
    const id = parseInt(req.params.id, 10); // Convertimos id a número
    const { estado } = req.body; // Extraemos el estado del pozo del cuerpo de la solicitud

    try {
        const result = await pool.query(
            'UPDATE pozos SET estado = $1 WHERE id = $2 RETURNING *',
            [estado, id]
        );

        if (result.rowCount === 0) {
            res.status(404).json({ message: 'Pozo no encontrado' });
            return;
        }

        res.json(result.rows[0]);
    } catch (error) {
        console.error('Error al actualizar el estado del pozo:', error);
        res.status(500).json({ message: 'Error al actualizar el estado del pozo' });
    }
};
