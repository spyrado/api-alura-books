import express from 'express';
import conectaNaDatabase from './config/dbConnect.js';
import routes from './routes/index.js';
import manipuladorDeErros from './middlewares/manipuladorDeErros.js';
import LogHelper from './helpers/logHelper.js';

const conexao = await conectaNaDatabase();

conexao.on('error', (erro) => {
  LogHelper.show('ERRO AO TENTAR CONECTAR AO BANCO DE DADOS', erro);
});

conexao.once('open', () => {
  LogHelper.show('CONECTOU AO BANCO COM SUCESSO', undefined);
});

const app = express();
routes(app);

app.use(manipuladorDeErros);

export default app;
