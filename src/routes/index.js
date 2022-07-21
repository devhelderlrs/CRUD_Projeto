import express from 'express';
import clientes from './clientesRoutes.js';
import contratos from './contratosRoutes.js';
import frotas from './frotasRoutes.js';
import funcionarios from './funcionariosRoutes.js';

const routes = (app) => {
    app.route('/').get((req, res) => {
        res.status(200).send('Rotas em construção.')
    })
}  