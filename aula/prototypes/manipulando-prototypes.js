// new Object -> Object.prototype
const objA = {
  chaveA: 'A'
  // __proto__: Object.prototype
};

const objB = {
  chaveB: 'B'
  // __proto__: objA
};

const objC = new Object();
objC.chaveC = 'C';

Object.setPrototypeOf(objB, objA);
Object.setPrototypeOf(objC, objB);
console.log(objB.chaveA);

/**
 {chaveC: 'C'}
      chaveC: "C"
        >> [[Prototype]]: Object
              chaveB: "B"
                >> [[Prototype]]: Object
                    chaveA: "A"
                      >> [[Prototype]]: Object
*/



function Produto(nome, preco) {
  this.nome = nome;
  this.preco =  preco
}

Produto.prototype.desconto = function(percentual) {
  this.preco = this.preco - (this.preco * (percentual / 100));
}

Produto.prototype.aumento = function(percentual) {
  this.preco = this.preco + (this.preco * (percentual / 100));
}

const p1  = new Produto('Camiseta', 50);
p1.desconto(15);
console.log(p1);

// Literal
const p2 = {
  nome: 'Caneca',
  preco: 15
}

Object.setPrototypeOf(p2, Produto.prototype);

p2.aumento(5);

console.log('p1: ', p1);
console.log('p2: ', p2);

// Outra forma de fazer, já setando o prototype para determinado objeto

const p3 = Object.create(Produto.prototype, {
  tamanho: {
    writable: true,
    configurable: true,
    enumerable: true,
    value: 240
  },

  tamanho2: {
    writable: true,
    configurable: true,
    enumerable: true,
    value: 500
  }

});

p3.preco = 113;
p3.aumento(4);
console.log(p3);
console.log('p3 com configuração de atributo: ',p3.tamanho);
console.log('p3 com configuração de segundo atributo: ',p3.tamanho2);
