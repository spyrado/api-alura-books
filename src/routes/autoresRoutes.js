import express from 'express';
import AutorController from '../controllers/autorController.js';

const routes = express.Router();

routes.get('/', AutorController.listar);
routes.get('/:id', AutorController.buscarPorId);
routes.post('/', AutorController.cadastrar);
routes.put('/:id', AutorController.atualizar);
routes.delete('/:id', AutorController.deletar);

export default routes;
