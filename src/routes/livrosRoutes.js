import express from 'express';
import LivroController from '../controllers/livroController.js';

const routes = express.Router();

routes.get('/', LivroController.listarLivros);

export default routes;
