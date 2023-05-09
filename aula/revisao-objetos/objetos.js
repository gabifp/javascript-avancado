const pessoa = {
  nome: 'Gabriela',
  sobrenome: 'Pimentel'
};

console.log(pessoa['nome']);

// que é a mesma coisa de...
console.log(pessoa.nome);

//O que eu só consigo fazer através dos colchetes:
const chave = 'nome';
console.log(pessoa[chave]); 
//ou seja, eu coloquei uma variável como atributo, de forma que agora recebo esse valor de forma dinâmica

//Outra forma de declararmos um objeto
const pessoa1 = new Object();
pessoa1.nome = 'Gabi';
pessoa1.sobrenome = 'Pimentel';
pessoa1.idade = 31;

console.log(pessoa1.nome);

//Se eu quiser apagar um ítem do objeto:
//delete pessoa1.nome;
//console.log(pessoa1);

//Incluindo funções nos objetos:
pessoa1.falaNome = function() {
  return `${this.nome} está falando seu nome`
}

//Pegando o último ano através do Date e subtraindo da idade:
pessoa1.getAnoDeNascimento = function() {
  const dataAtual = new Date();
  return dataAtual.getFullYear() - this.idade;
}

console.log(pessoa1.getAnoDeNascimento());

//Obtendo as chaves do objeto:
for (let chave in pessoa1) {
  console.log(chave);
}

//Obtendo os valores das chaves:
for (let chave in pessoa1) {
  console.log(pessoa1[chave]);
}

// -----

//Nós nunca alteramos o endereço de memória da variável, somente seu valor:

/**
 * 
 *  p1 = (ENDEREÇODEMEMORIA) -> 'valor'
 *  p1 = (NOVOENDEREÇODEM...) **não consigo fazer isso
 *  p1.ENDEREÇODEMEMORIA = {raca: 'Outra raca'}
 * 
 */

function Cachorro(raca, nome) {
  this.nome = nome;
  this.raca = raca;

  Object.freeze(this); // e isso faz com que eu trave a alteração de valores dos atributos
}

const p1 = new Cachorro('Dog', 'Chuchu');
p1.raca = 'Outra raca';

