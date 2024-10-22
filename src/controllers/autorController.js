import NaoEncontrado from '../erros/NaoEncontrado.js';
import { autores } from '../models/Autor.js';

class AutorController {
  static async listar(req, res, next) {
    try {
      const listaAutores = await autores.find({});
      res.status(200).json(listaAutores);
    } catch (error) {
      next(error);
    }
  }

  static async buscarPorId(req, res, next) {
    try {
      const id = req.params.id;
      const autor = await autores.findById(id);
      autor
        ? res.status(200).json(autor)
        : next(new NaoEncontrado('Autor não encontrado.'));
    } catch (error) {
      next(error);
    }
  }

  static async cadastrar(req, res, next) {
    try {
      const autor = await autores.create(req.body);
      res.status(201).json(autor);
    } catch (error) {
      next(error);
    }
  }

  static async atualizar(req, res, next) {
    try {
      const id = req.params.id;
      const autor = req.body;
      const autorAtualizado = await autores.findByIdAndUpdate(id, autor, {
        new: true,
        runValidators: true,
      });
      autorAtualizado
        ? res.status(200).json(autorAtualizado)
        : next(new NaoEncontrado('Autor não encontrado.'));
    } catch (error) {
      next(error);
    }
  }

  static async deletar(req, res, next) {
    try {
      const id = req.params.id;
      const autor = await autores.findByIdAndDelete(id);
      autor
        ? res.status(204).send()
        : next(new NaoEncontrado('Autor não encontrado.'));
    } catch (error) {
      console.log(error);
      next(error);
    }
  }
}

export default AutorController;
