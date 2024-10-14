import express from 'express';
import LivroController from '../controllers/livroController.js';

const routes = express.Router();

routes.get('/', LivroController.listar);
/**
 * o /busca precisa ficar acima do /:id quando tem 2 gets pois o express vai resolver o primeiro que achar,
 * se o /busca ficasse depois do /:id ele iria pensar que o /busca é um id, no express as rotas de maior complexidade sempre devem ficar no topo.
 */
routes.get('/busca', LivroController.buscarLivroPorAutor);
routes.get('/:id', LivroController.buscarPorId);
routes.post('/', LivroController.cadastrar);
routes.put('/:id', LivroController.atualizar);
routes.delete('/:id', LivroController.deletar);

export default routes;
