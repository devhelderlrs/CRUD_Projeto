import express from 'express';
import * as dotenv from 'dotenv';
import router from './routes/clientesRoutes';
import ClientesController from './controllers/ClientesController.js';
import ContratosController from './controllers/ContratosController.js';
import FrotasController from './controllers/FrotasController.js';
import FuncionariosController from './controllers/FuncionariosController.js';

dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log(`Servidor aberto em http://localhost:${port}`);
})

app.use(router)

export default app;