import express from 'express';

const app = express();

app.use(express.json());

const livros = [
  {
    id: 1,
    titulo: 'O Senhor dos Anéis',
  },
  {
    id: 2,
    titulo: 'O Hobbit',
  },
];

app.get('/', (req, res) => {
  res.status(200).send('Curso de Node.js');
});

app.get('/livros', (req, res) => {
  res.status(200).json(livros);
});

app.get('/livros/:id', (req, res) => {
  const index = buscarLivro(req.params.id);
  res.status(200).json(livros[index]);
});

app.put('/livros/:id', (req, res) => {
  const index = buscarLivro(req.params.id);
  const newLivro = {
    ...livros[index],
    ...req.body,
  };
  livros[index] = newLivro;
  res.status(200).json(livros[index]);
});

app.post('/livros', (req, res) => {
  console.log(req.body);
  livros.push(req.body);
  res.status(201).json(livros);
});

app.delete('/livros/:id', (req, res) => {
  const index = buscarLivro(req.params.id);
  livros.splice(index, 1);
  res.status(200).json(livros);
});

function buscarLivro(id) {
  return livros.findIndex((livro) => livro.id === Number(id));
}

export default app;
