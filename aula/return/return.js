function criaMultiplicador(multiplicador) {
  return function(n) {
    return n * multiplicador;
  }
}

duplica = criaMultiplicador(2);
triplica = criaMultiplicador(3);
quadriplica = criaMultiplicador(4);

console.log(duplica(2));
console.log(triplica(2));
console.log(quadriplica(2));
