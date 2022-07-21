import express from 'express';
import FuncionariosController from '../controllers/FuncionariosController.js';

const router = express.Router();

router
    .get('/funcionarios', FuncionariosController.visualizarFuncionarios())
    .get('/funcionarios/:nome_funcionario', FuncionariosController.visualizarFuncionariosPorNome())
    .get('/funcionarios/:setor', FuncionariosController.visualizarFuncionariosPorSetor())
    .post('/funcionarios', FuncionariosController.incluirFuncionarios())
    .put('/funcionarios/:nome_funcionario', FuncionariosController.atualizarFuncionarios())
    .delete('/funcionarios/:nome_funcionario', FuncionariosController.deletarFuncionarios())

export default router;