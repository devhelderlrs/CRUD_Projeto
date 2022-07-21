import express from 'express';
import FrotasController from '../controllers/FrotasController.js';

const router = express.Router();

router
    .get('/frotas', FrotasController.visualizarFrotas())
    .get('/frotas/:veiculo' , FrotasController.visualizarVeiculosPorFrota())
    .post('/frotas', FrotasController.cadastrarVeiculos())
    .put('/frotas' , FrotasController.atualizarFrotas())
    .delete('/frotas/:veiculo', FrotasController.deletarVeiculos())

export default router;