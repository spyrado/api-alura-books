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
        : res.status(404).send({ mensagem: 'Autor não encontrado.' });
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
      res.status(200).json(autorAtualizado);
    } catch (error) {
      next(error);
    }
  }

  static async deletar(req, res, next) {
    try {
      const id = req.params.id;
      await autores.findByIdAndDelete(id);
      res.status(204).send();
    } catch (error) {
      next(error);
    }
  }
}

export default AutorController;
