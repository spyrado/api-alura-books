import express from 'express';
import conectaNaDatabase from './config/dbConnect.js';
import routes from './routes/index.js';
import manipuladorDeErros from './middlewares/manipuladorDeErros.js';

const conexao = await conectaNaDatabase();

conexao.on('error', (erro) => {
  console.log('ERRO AO TENTAR CONECTAR AO BANCO DE DADOS', erro);
});

conexao.once('open', () => {
  console.log('CONECTOU AO BANCO COM SUCESSO');
});

const app = express();
routes(app);

app.use(manipuladorDeErros);

export default app;
