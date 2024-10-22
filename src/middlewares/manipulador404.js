import NaoEncontrado from '../erros/NaoEncontrado.js';

function manipulador404(req, res, next) {
  const naoEncontrado = new NaoEncontrado();
  next(naoEncontrado);
}

export default manipulador404;
