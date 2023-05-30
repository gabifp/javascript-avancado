const BD = 'Conexão com o Banco de Dados.';
const dadosBase = 'Buscando dados da BASE.';
const trataDados = 'Tratando dados da BASE.';
const exibirDados = 'Exibe os dados na tela.';

function rand(min, max) {
  min *= 1000;
  max *= 1000;

  return Math.floor(Math.random() * (max - min) + min);
}

function espera(msg, tempo) {
  return new Promise((resolve, reject) => {
    // Condição do reject
    if (typeof msg !== 'string') reject('Bad value.');
    setTimeout(() => {
      // A promessa é essa aqui:
      resolve(msg);
    }, tempo);
  });
}

espera(BD, rand(1, 3))
  // Se resolvido conforme a promessa, então temos o resultado esperado
  .then(resposta => {
    console.log(resposta);
    return espera(dadosBase, rand(1, 3));
  })
  .then(resposta => {
    console.log(resposta);
    return espera(trataDados, rand(1, 3));
  })
  .then(resposta => {
    console.log(resposta);
    return espera(exibirDados, rand(1, 3));
  })
  .then(resposta => {
    console.log(resposta);
  })
  // Se reject for true, exibimos o erro:
  .catch(error => {
    console.log('ERRO: ', error);
  })
  