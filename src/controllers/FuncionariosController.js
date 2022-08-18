import { Database } from '../infra/Database.js';
import FruncionariosModel from '../models/FuncionariosModel.js';

class FuncionariosController{
    static visualizarFuncionarios(){
        return Database.Funcionarios;
    }

    static visualizarFuncionariosPorNome(){
        
    }

    static visualizarFuncionariosPorSetor(){

    }

    static incluirFuncionarios(){

    }

    static atualizarFuncionarios(){

    }

    static deletarFuncionarios(){

    }
}

export default FuncionariosController;