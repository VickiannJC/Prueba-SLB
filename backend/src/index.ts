import express from 'express';
import cors from 'cors';
import pozosRoutes from './routes/pozos.routes';
import { pool } from './db/db.config';

console.log('Inicializando servidor...');

const app = express();
const port = 3000;

// Middleware
console.log('Cargando middlewares...');
app.use(cors());
app.use(express.json());


// Rutas
console.log('Cargando rutas...');
console.log('Valor de pozosRoutes:', pozosRoutes);
app.use('/pozos', pozosRoutes);



// Iniciar el servidor
app.listen(port, () => {
    console.log(`Servidor corriendo en http://localhost:${port}`);
});
