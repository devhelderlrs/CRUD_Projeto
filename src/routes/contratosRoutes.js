import express from 'express';
import ContratosController from '../controllers/ContratosController.js';

const router = express.Router();

router
    .get('/contratos', ContratosController.visualizarContratos())
    .get('/contratos/:num_contrato', ContratosController.visualizarContratosPorNumero())
    .post('/contratos/', ContratosController.incluirContratos())
    .put('/contratos/:num_contrato', ContratosController.atualizarContratos())
    .delete('/contratos/:num_contrato', ContratosController.deletarContratos())

export default router;