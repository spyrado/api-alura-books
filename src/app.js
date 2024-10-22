import express from 'express';
import conectaNaDatabase from './config/dbConnect.js';
import routes from './routes/index.js';
import manipuladorDeErros from './middlewares/manipuladorDeErros.js';
import manipulador404 from './middlewares/manipulador404.js';

const conexao = await conectaNaDatabase();

conexao.on('error', (erro) => {
  console.log('ERRO AO TENTAR CONECTAR AO BANCO DE DADOS', erro);
});

conexao.once('open', () => {
  console.log('CONECTOU AO BANCO COM SUCESSO');
});

const app = express();
routes(app);
/**
 * caso o express não encontre nenhuma das rotas acima ( ele procura da primeira e vai verificando segunda terceira
 * e por ai vai.. ) se ele não achar nenhuma cadastrada ele vai car no meu manipulador404 ( que vai dar uma mensagem )
 * de página não encontrada.
 */
app.use(manipulador404);
app.use(manipuladorDeErros);

export default app;
