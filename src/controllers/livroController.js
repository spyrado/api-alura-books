import { logHelper } from '../helpers/logHelper.js';
import livros from '../models/Livro.js';

class LivroController {
  static async listar(req, res) {
    try {
      const listaLivros = await livros.find({});
      res.status(200).json(listaLivros);
    } catch (error) {
      logHelper.show('ERRO AO TENTAR LISTAR LIVROS', error);
      res.status(500).json(error);
    }
  }

  static async buscarPorId(req, res) {
    try {
      const id = req.params.id;
      const livro = await livros.findById(id);
      livro
        ? res.status(200).json(livro)
        : res.status(404).send({ mensagem: 'Livro não encontrado.' });
    } catch (error) {
      logHelper.show('ERRO AO TENTAR BUSCAR LIVROS POR ID', error);
      res.status(500).json(error);
    }
  }

  static async cadastrar(req, res) {
    try {
      const livro = await livros.create(req.body);
      res.status(201).json(livro);
    } catch (error) {
      res.status(500).send(error.message);
      logHelper.show('ERRO AO TENTAR CADASTRAR LIVRO', error);
    }
  }

  static async atualizar(req, res) {
    try {
      const id = req.params.id;
      const livro = req.body;
      const livroAtualizado = await livros.findByIdAndUpdate(id, livro, {
        new: true,
        runValidators: true,
      });
      res.status(200).json(livroAtualizado);
    } catch (error) {
      res.status(500).send(error.message);
      logHelper.show('ERRO AO TENTAR ATUALIZAR LIVRO', error);
    }
  }

  static async deletar(req, res) {
    try {
      const id = req.params.id;
      await livros.findByIdAndDelete(id);
      res.status(204).send();
    } catch (error) {
      res.status(500).send(error.message);
      logHelper.show('ERRO AO TENTAR DELETAR LIVRO', error);
    }
  }
}

export default LivroController;
