const fora = require('./closure');

let x = 100
console.log(fora());

class Funcionario {
  constructor(nome, salario) {
    this.nome = nome;
    this.salario = salario;
  }

  getDetalhes() {
    return `${this.nome} recebe um salário de ${this.salario} reais.`;
  }
}
