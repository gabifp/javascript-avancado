// defineProperty - defineProperties
function Produto(nome, preco, estoque) {
  this.nome = nome,
  this.preco = preco,

  Object.defineProperty(this, 'estoque', {
    enumerable: true, // mostra a chave
    value: estoque, // valor
    writable: true, // pode alterar ou não
    configurable: true // reconfigurável
  });

  /* Object.defineProperties(this, {
    nome: {
      enumerable: true, // mostra a chave
      value: estoque, // valor
      writable: true, // pode alterar ou não
      configurable: true // reconfigurável
    },
    
    preco: {
      enumerable: true, // mostra a chave
      value: estoque, // valor
      writable: true, // pode alterar ou não
      configurable: true // reconfigurável
    }
  }) */
}

const p1 = new Produto('Camiseta', 20, 3);
p1.estoque = 500000; // não é possível atribuir outro valor
console.log(p1);
console.log(Object.keys(p1));