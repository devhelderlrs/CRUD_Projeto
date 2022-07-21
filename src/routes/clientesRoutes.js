import express from 'express';
import ClientesController from '../controllers/ClientesController.js'

const router = express.Router();

router
    .get('/clientes', ClientesController.visualizarClientes())
    .post('/clientes', ClientesController.cadastrarClientes())
    .put('/clientes/:nome', ClientesController.atualizarClientes())
    .delete('/clientes/:nome' , ClientesController.deletarClientes())

export default router;