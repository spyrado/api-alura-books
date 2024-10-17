import RequisicaoIncorreta from './RequisicaoIncorreta.js';

class ErroValidacao extends RequisicaoIncorreta {
  constructor(erro) {
    const errorMessages = Object.values(erro.errors).map((erro) => {
      return {
        campo: erro.path,
        mensagem_de_erro: erro.message,
      };
    });
    super('Falha na validação', 400, errorMessages);
  }
}

export default ErroValidacao;
