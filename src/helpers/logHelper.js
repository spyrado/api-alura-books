export class logHelper {
  static show(mensagem, erro) {
    console.log(`================= ${mensagem} =================`);
    erro && console.log('ERROR: ', JSON.stringify(erro));
  }
}
