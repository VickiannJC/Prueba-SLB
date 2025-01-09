"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const pozos_routes_1 = __importDefault(require("./routes/pozos.routes"));
console.log('Inicializando servidor...');
const app = (0, express_1.default)();
const port = 3000;
// Middleware
console.log('Cargando middlewares...');
app.use((0, cors_1.default)());
app.use(express_1.default.json());
// Rutas
console.log('Cargando rutas...');
app.use(pozos_routes_1.default);
// Iniciar el servidor
app.listen(port, () => {
    console.log(`Servidor corriendo en http://localhost:${port}`);
});
