import livros from '../models/Livro.js';

class LivroController {
  static async listar(req, res, next) {
    try {
      // COM EMBEDDING
      // const listaLivros = await livros.find({});

      // COM REFERECING
      const listaLivros = await livros.find({}).populate('autor').exec();
      res.status(200).json(listaLivros);
    } catch (error) {
      next(error);
    }
  }

  static async buscarPorId(req, res, next) {
    try {
      const id = req.params.id;
      const livro = await livros.findById(id);
      livro
        ? res.status(200).json(livro)
        : res.status(404).send({ mensagem: 'Livro não encontrado.' });
    } catch (error) {
      next(error);
    }
  }

  static async cadastrar(req, res, next) {
    try {
      // COM EMBEDDING
      // const { autor: autorId, ...novoLivro } = req.body;
      // const autor = await autores.findById(autorId);
      // const livro = await livros.create({ ...novoLivro, autor: autor._doc });

      // COM REFERECING
      const livro = await livros.create(req.body);
      res.status(201).json(livro);
    } catch (error) {
      next(error);
    }
  }

  static async atualizar(req, res, next) {
    try {
      const id = req.params.id;
      const livro = req.body;
      const livroAtualizado = await livros.findByIdAndUpdate(id, livro, {
        new: true,
        runValidators: true,
      });
      res.status(200).json(livroAtualizado);
    } catch (error) {
      next(error);
    }
  }

  static async deletar(req, res, next) {
    try {
      const id = req.params.id;
      await livros.findByIdAndDelete(id);
      res.status(204).send();
    } catch (error) {
      next(error);
    }
  }

  static async buscarLivroPorAutor(req, res, next) {
    try {
      const editora = req.query.editora;
      const regex = new RegExp(editora, 'i');
      const livro = await livros.find({ editora: regex });
      res.status(200).json(livro);
    } catch (error) {
      next(error);
    }
  }
}

export default LivroController;
