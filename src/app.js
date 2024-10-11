import express from 'express';
import conectaNaDatabase from './config/dbConnect.js';
import livro from './models/Livro.js';
import { logHelper } from './helpers/logHelper.js';
import routes from './routes/index.js';

const conexao = await conectaNaDatabase();

conexao.on('error', (erro) => {
  logHelper.show('ERRO AO TENTAR CONECTAR AO BANCO DE DADOS', error);
});

conexao.once('open', () => {
  logHelper.show('CONECTOU AO BANCO COM SUCESSO', undefined);
});

const app = express();
routes(app);

// app.use(express.json());

// app.get('/', (req, res) => {
//   res.status(200).send('Curso de Node.js');
// });

// app.get('/livros/:id', async (req, res) => {
//   try {
//     const livroItem = await livro.findById(req.params.id);
//     res.status(200).json(livroItem);
//   } catch (error) {
//     logHelper.show('FALHA AO BUSCAR O LIVRO POR ID', error);
//     res.status(404).send();
//   }
// });

// app.put('/livros/:id', (req, res) => {
//   const index = buscarLivro(req.params.id);
//   const newLivro = {
//     ...livros[index],
//     ...req.body,
//   };
//   livros[index] = newLivro;
//   res.status(200).json(livros[index]);
// });

// app.post('/livros', (req, res) => {
//   console.log(req.body);
//   livros.push(req.body);
//   res.status(201).json(livros);
// });

// app.delete('/livros/:id', (req, res) => {
//   const index = buscarLivro(req.params.id);
//   livros.splice(index, 1);
//   res.status(200).json(livros);
// });

// function buscarLivro(id) {
//   return livros.findIndex((livro) => livro.id === Number(id));
// }

export default app;
