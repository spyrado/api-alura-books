import mongoose from 'mongoose';
import LogHelper from '../helpers/logHelper.js';

// eslint-disable-next-line no-unused-vars
function manipuladorDeErros(error, req, res, next) {
  LogHelper.show(`MANIPULADOR DE ERROS: endpoint: ${req.originalUrl}`);
  if (error instanceof mongoose.Error.CastError) {
    res
      .status(400)
      .send({ message: 'Um ou mais dados fornecidos estão incorretos' });
  } else if (error instanceof mongoose.Error.ValidationError) {
    const errorMessages = Object.values(error.errors).map((erro) => {
      return {
        campo: erro.path,
        mensagem_de_erro: erro.message,
      };
    });
    // console.log(error.errors);
    res
      .status(400)
      .send({ mensagem: 'Falha na validação', erros: errorMessages });
  } else {
    res.status(500).json(error);
  }
}

export default manipuladorDeErros;
