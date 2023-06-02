function rand(min, max) {
  min *= 1000;
  max *= 1000;

  return Math.floor(Math.random() * (max - min) + min);
}

function espera(msg, tempo) {
  return new Promise((resolve, reject) => {
    if (msg ==! 'string') {
      reject('Cai no erro');
    }
    resolve(msg);
  })
}
// Implementar o exemplo de promise com página em cache

function carregaPagina() {
  let emCache = true;

  if (emCache) {
    //Aqui eu poderia chamar o reject, no lugar do resolve, se o if validasse a condição iria cair no catch.
    return Promise.resolve('Página em cache');
  }

  return espera('Baixei a página', rand(1, 3));
}

carregaPagina()
  .then(dadosPaginas => {
    console.log(dadosPaginas);
  })
  .catch(erro => console.log(erro));