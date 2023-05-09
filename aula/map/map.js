// Dobre os números

const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];

const numerosEmDobro = numeros.map(valor => valor * 2);

/* numeros.map(function(value, index, array) {
  // aplicar uma lógica
  é a mesma coisa que a função acima...^
}) */

console.log('--------')
console.log('NUMEROS DOBRADOS:')
console.log(numeros);
console.log(numerosEmDobro);
console.log('--------')


/* Para cada elemento:
Retorne apenas uma string com o nome da pessoas
Remova apenas a chave "nome" do objeto
Adicione uma chave id em cada objeto (id) */


const pessoas = [
  {nome: 'Luiz', idade: 62},
  {nome: 'Maria', idade: 32},
  {nome: 'Eduardo', idade: 55},
  {nome: 'Leticia', idade: 19},
  {nome: 'Rosana', idade: 32},
  {nome: 'Wallace', idade: 47}
]

const nomes = pessoas.map(obj => obj.nome);
const idades = pessoas.map(obj => ({ idade : obj.idade }));

const ids = pessoas.map(function(obj, index) {
  const newObj = { ...obj }; // inserimos o newObj para não alterarmos o obj original
  newObj.id = index
  return newObj
})

console.log('MANIPULAÇÃO DO OBJETO:')
console.log(nomes);
console.log(idades);
console.log(ids);