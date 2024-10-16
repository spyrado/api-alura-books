export default class LogHelper {
  static show(mensagem, erro) {
    console.log(`================= ${mensagem} =================`);
    // erro && console.log('ERROR: ', JSON.stringify(erro));
    erro && LogHelper.formatarErro(erro);
  }

  static formatarErro(error) {
    const { message, stack } = error;
    const [firstLine, ...stackLines] = stack.split('\n');

    const localizacao = firstLine.match(/\(([^)]+)\)/)[1];

    console.log('--- Erro ---');
    console.log(`Tipo: ${error.name}`);
    console.log(`Mensagem: ${message}`);
    console.log(`Local: ${localizacao}`);
    console.log('\nStack Trace:');

    stackLines.forEach((line, index) => {
      const trace = line.trim().replace(/^at\s/, '');
      console.log(`${index + 1}. ${trace}`);
    });
  }
}
