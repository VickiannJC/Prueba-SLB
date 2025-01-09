import express, { Request, Response } from 'express';
import path from 'path';

const app = express();
const PORT = process.env.PORT || 8080;

// Ruta estática para servir los archivos de Angular
app.use(express.static(path.join(__dirname, '../dist/frontend')));

// Redirige todas las rutas al archivo index.html de Angular
app.get('*', (req: Request, res: Response) => {
  res.sendFile(path.join(__dirname, '../dist/frontend/index.html'));
});

// Inicia el servidor
app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
