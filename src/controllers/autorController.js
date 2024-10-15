import mongoose from 'mongoose';
import { logHelper } from '../helpers/logHelper.js';
import { autores } from '../models/Autor.js';

class AutorController {
  static async listar(req, res) {
    try {
      const listaAutores = await autores.find({});
      res.status(200).json(listaAutores);
    } catch (error) {
      logHelper.show('ERRO AO TENTAR LISTAR AUTORES', error);
      res.status(500).json(error);
    }
  }

  static async buscarPorId(req, res) {
    try {
      const id = req.params.id;
      const autor = await autores.findById(id);
      autor
        ? res.status(200).json(autor)
        : res.status(404).send({ mensagem: 'Autor não encontrado.' });
    } catch (error) {
      if (error instanceof mongoose.Error.CastError) {
        res
          .status(400)
          .send({ message: 'Um ou mais dados fornecidos estão incorretos' });
      } else {
        logHelper.show('ERRO AO TENTAR BUSCAR AUTORES POR ID', error);
        res.status(500).json(error);
      }
    }
  }

  static async cadastrar(req, res) {
    try {
      const autor = await autores.create(req.body);
      res.status(201).json(autor);
    } catch (error) {
      res.status(500).send(error.message);
      logHelper.show('ERRO AO TENTAR CADASTRAR AUTOR', error);
    }
  }

  static async atualizar(req, res) {
    try {
      const id = req.params.id;
      const autor = req.body;
      const autorAtualizado = await autores.findByIdAndUpdate(id, autor, {
        new: true,
        runValidators: true,
      });
      res.status(200).json(autorAtualizado);
    } catch (error) {
      res.status(500).send(error.message);
      logHelper.show('ERRO AO TENTAR ATUALIZAR AUTOR', error);
    }
  }

  static async deletar(req, res) {
    try {
      const id = req.params.id;
      await autores.findByIdAndDelete(id);
      res.status(204).send();
    } catch (error) {
      res.status(500).send(error.message);
      logHelper.show('ERRO AO TENTAR DELETAR AUTOR', error);
    }
  }
}

export default AutorController;
