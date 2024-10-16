import mongoose from 'mongoose';
import LogHelper from '../helpers/logHelper.js';

// eslint-disable-next-line no-unused-vars
function manipuladorDeErros(error, req, res, next) {
  LogHelper.show(`MANIPULADOR DE ERROS: endpoint: ${req.originalUrl}`, error);
  if (error instanceof mongoose.Error.CastError) {
    res
      .status(400)
      .send({ message: 'Um ou mais dados fornecidos estão incorretos' });
  } else {
    res.status(500).json(error);
  }
}

export default manipuladorDeErros;
