import { logHelper } from '../helpers/logHelper.js';
import livro from '../models/Livro.js';

class LivroController {
  static async listarLivros(req, res) {
    try {
      const listaLivros = await livro.find({});
      res.status(200).json(listaLivros);
    } catch (error) {
      logHelper.show('ERRO AO TENTAR LISTAR LIVROS', error);
    }
  }

  static async cadastraLivro(req, res) {
    try {
      const novoLivro = await livro.create(req.body);
      res.status(201).json(novoLivro);
    } catch (error) {
      res.status(500).send(error.message);
      logHelper.show('ERRO AO TENTAR CADASTRAR LIVRO', error);
    }
  }
}

export default LivroController;
