import express from 'express';
import LivroController from '../controllers/livroController.js';

const routes = express.Router();

routes.get('/', LivroController.listar);
routes.get('/:id', LivroController.buscarPorId);
routes.post('/', LivroController.cadastrar);
routes.put('/:id', LivroController.atualizar);
routes.delete('/:id', LivroController.deletar);

export default routes;
