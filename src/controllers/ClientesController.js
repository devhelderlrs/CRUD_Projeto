import { Database } from '../infra/Database.js';
import ClientesModel from '../models/ClientesModel.js'

class ClientesController{

    static visualizarClientes = (req, res) => {
        res.status(200).json(clientes);
    }

    static cadastrarClientes = (req, res) => {
        let clientes = new ClientesModel(req.body)
        res.status(201).json(clientes);
    }

    static atualizarClientes = (req, res) => {

    }

    static deletarClientes = (req, res) => {

    }

}

export default ClientesController;