function rand(min, max) {
  min *= 1000;
  max *= 1000;

  return Math.floor(Math.random() * (max - min) + min);
}

function espera(msg, tempo) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (typeof msg !== 'string') return reject(`Msg inserida não é uma string: ${msg}`);
      resolve(msg.toUpperCase() + ' - Passei na promise.');
    }, tempo);
  });
}

const promises = [
  /* 'Primeiro valor', */
  espera('Promise 1', rand(1, 3)),
  espera('Promise 2', rand(1, 3)),
  espera('Promise 3', rand(1, 3)),
  espera(123, rand(1, 3)), //erro
  /* 'Último valor' */
];

// PROMISE.ALL (Resolve todas as promessas e as entrega na ordem no array):
/* 
Promise.all(promises)
  .then(valor => console.log(valor))
  .catch(erro => console.log(erro)); 
  
OUTPUT:
[
  'Primeiro valor',
  'Promise 1',
  'Promise 2',
  'Promise 3',
  'Último valor'
]
  */

// PROMISE.RACE (Entrega o que for resolvido primeiro):
/* 
Promise.race(promises)
  .then(valor => console.log(valor))
  .catch(erro => console.log(erro));

OUTPUT:
  Primeiro valor
 */

