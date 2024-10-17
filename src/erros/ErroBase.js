class ErroBase extends Error {
  constructor(message = 'Erro interno do servidor.', status = 500, erros = []) {
    super();
    this.message = message;
    this.status = status;
    this.erros = erros;
  }

  enviarResposta(res) {
    res.status(this.status).send({
      erros: this.erros,
      mensagem: this.message,
      status: this.status,
    });
  }
}

export default ErroBase;
