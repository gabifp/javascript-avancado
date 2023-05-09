// Some todos os números

const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];

const somaNumeros = numeros.reduce((acumulador, valor) => acumulador += valor);

console.log(somaNumeros);

// Some somente os números pares

const somaNumerosPares = numeros.filter(valor => valor % 2 == 0).reduce((acc, valor) => acc += valor);

console.log(somaNumerosPares);

/* FORMA TRABALHOSA DE FAZER A SOMA DE PARES:

const somaPares = numeros.reduce(function(acumulador, valor) {
  if (valor % 2 == 0){
    acumulador += valor;
  }
  return acumulador
}, 0)

console.log(somaPares); */
