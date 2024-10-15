import express from 'express';
import conectaNaDatabase from './config/dbConnect.js';
import { logHelper } from './helpers/logHelper.js';
import routes from './routes/index.js';

const conexao = await conectaNaDatabase();

conexao.on('error', (erro) => {
  logHelper.show('ERRO AO TENTAR CONECTAR AO BANCO DE DADOS', erro);
});

conexao.once('open', () => {
  logHelper.show('CONECTOU AO BANCO COM SUCESSO', undefined);
});

const app = express();
routes(app);

export default app;
