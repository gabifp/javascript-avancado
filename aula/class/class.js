// Muito parecido com a função construtora

class Pessoa {

  // Utilizado caso queiramos receber parâmetros em nossa classe
  constructor(nome, sobrenome) {
    this.nome = nome;
    this.sobrenome = sobrenome;
  }

  // O interessante é eu não preciso incluir meus métodos no propotype, ele já é inserido automaticamente (!= função construtora)
  falar() {
    console.log(`${this.nome} está falando`);
  }

  comer() {
    console.log(`${this.nome} está comendo`);
  }

  beber() {
    console.log(`${this.nome} está bebendo`);
  }
}

const gabriela = new Pessoa('Gabriela', 'Fernanda');
console.log(gabriela);
console.log(gabriela.falar());