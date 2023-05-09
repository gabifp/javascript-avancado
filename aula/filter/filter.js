const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];

/* A maneira que eu fiz:
const numerosFiltrados = [];

for (let n of numeros) {
  if (n > 10) numerosFiltrados.push(n);

  function callBack(valor) {
    return valor > 10;
  }
} 
*/

const numerosFiltrados = numeros.filter(valor => valor > 10);
console.log(numerosFiltrados);

const pessoas = [
  {nome: 'Luiz', idade: 62},
  {nome: 'Maria', idade: 32},
  {nome: 'Eduardo', idade: 55},
  {nome: 'Leticia', idade: 19},
  {nome: 'Rosana', idade: 32},
  {nome: 'Wallace', idade: 47}
]

const pessoasComNomeGrande = pessoas.filter(obj => obj.nome.length >= 5);
const pessoasComMaisDeCinquenta = pessoas.filter(obj => obj.idade > 50);
const nomeTerminaComA = pessoas.filter(obj => {
  return obj.nome.toLowerCase().endsWith('a');
})

console.log(pessoasComNomeGrande);
console.log(pessoasComMaisDeCinquenta);
console.log(nomeTerminaComA);



