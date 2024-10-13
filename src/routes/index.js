import express from 'express';
import livros from './livrosRoutes.js';
import autores from './autoresRoutes.js';

const routes = (app) => {
  app.use(express.json());
  app.use('/livros', livros);
  app.use('/autores', autores);
};

export default routes;
