import ErroBase from './ErroBase.js';

class RequisicaoIncorreta extends ErroBase {
  constructor(
    message = 'Um ou mais dados fornecidos estão incorretos.',
    status = 400,
    erros = []
  ) {
    super(message, status, erros);
  }
}

export default RequisicaoIncorreta;
