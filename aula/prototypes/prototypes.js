// Contrutora -> molde (classe)
function Pessoa(nome, sobrenome) {
  this.nome = nome;
  this.sobrenome = sobrenome;

  // esse método cria um problema de performance no computador do usuário, por se tratar de um "problema" do frontend
  // e a solução para isso é criar um método único dentro de __proto__, que será acessado/parte por todas as instâncias.
  // this.nomeCompleto = () => this.nome + ' ' + this.sobrenome;
}

Pessoa.prototype.nomeCompleto = function() {
  return this.nome + ' ' + this.sobrenome
}; 

/* Pessoa.prototype === pessoa1.__proto__
o proto é um atributo do Pai, ou seja, da função construtora

A cadeia de hierarquia começa em... 
data -> Date.prototype -> Object.prototype 
pessoa1 --> Pessoa.prototype --> Object.prototype
*/


// instância
const pessoa1 = new Pessoa('Gabriela', 'Pimentel'); // <- Pessoa = Função construtora
const pessoa2 = new Pessoa('Isabela', 'Prieto'); // <- Pessoa = Função construtora
const data = new Date(); // <- Date = Função construtora

console.dir(pessoa1);
console.dir(pessoa2); 