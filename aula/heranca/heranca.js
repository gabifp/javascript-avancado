/* O grande poder da herança está em poder criar algo mais simples e genéricos para vários objetos,
e após isso poder ser mais específico no que for necessário para cada um deles, de acordo com a necessidade,
sem que haja repetição de código.  */

function Produto(nome, preco) {
  this.nome = nome;
  this.preco = preco
}

Produto.prototype.aumento = function(quantia) {
  this.preco += quantia;
}

Produto.prototype.desconto = function(quantia) {
  this.preco -= quantia; 
};

function Camiseta(nome, preco, cor) {
  Produto.call(this, nome, preco);
  this.cor = cor;
};

function Caneca(nome, preco, material, estoque) {
  Produto.call(this, nome, preco);
  this.material = material;

  Object.defineProperty(this, 'estoque', {
    enumerable: true,
    configurable: false,
    get: function() {
      return estoque;
    },
    set: function(valor) {
      if (typeof valor !== 'number') return;
      estoque = valor;
    }
  });
}

// CAMISETA

/* Eu estou linkando o prototype de Camiseta como Produto,
Isso é possível partindo da ideia que prototype nada mais é do que um objeto vazio
Então, o que está acontecendo é que esse objeto vazio está recebendo novos atributos/métodos */
Camiseta.prototype = Object.create(Produto.prototype);

/* Com isso o contrutor de Camiseta volta a ser camiseta 
e não mais Produto (que ocorreu após a atribuição de prototype de Produto para Camiseta) */
Camiseta.prototype.constructor = Camiseta;

// Sobrescrevendo o método vindo do prototype de Produto
Camiseta.prototype.aumento = function(percentual) {
  this.preco = this.preco + (this.preco * (percentual / 100));
};

// CANECA

Caneca.prototype = Object.create(Produto.prototype);
Caneca.prototype.constructor = Caneca;

Caneca.prototype.desconto = function(percentual) {
  this.preco = this.preco - (this.preco * (percentual / 100));
};

const produto = new Produto('Generico', 111);
const camiseta = new Camiseta('Regata', 7.5, 'Preta');
const caneca = new Caneca('Friends', 40, 'Porcelana', 5);

// Aqui estou usando o set
caneca.estoque = 10;

console.log(produto);
console.log(camiseta);
console.log(caneca);

// Aqui estou usando o get
console.log(caneca.estoque);
