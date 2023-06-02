const falar = {
  falar() {
    console.log(`${this.nome} está falando`);
  }
}

const beber = {
  beber() {
    console.log(`${this.nome} está bebendo`);
  }
}

const comer = {
  comer() {
    console.log(`${this.nome} está comendo`);
  }
}

const pessoaPrototype = Object.assign({}, falar, beber, comer);

function criaPessoa(nome, sobrenome) {
  return Object.create(pessoaPrototype, {
    nome: { value: nome },
    sobrenome: { value: sobrenome }
  });
}

const gabi = criaPessoa('Gabriela', 'Pimentel');
console.log(gabi.nome);