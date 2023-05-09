/***
 *  O objeto Map armazena pares de chave-valor e lembra a 
 *  ordem original de inserção das chaves.
 *  Qualquer valor (tanto objetos como valores primitivos) 
 *  pode ser usado como chave ou valor.
 */

const pessoas = [
  { id: 3, nome: 'Gabriela' },
  { id: 2, nome: 'Fernanda' },
  { id: 1, nome: 'Eduardo' }
]

// Uma maneira de fazer, mas que gera um id em ordem crescente e não na ordem original dos id's internos

/* const novasPessoas = {};
for (const pessoa of pessoas ) {
  const { id } = pessoa;
  novasPessoas[id] = { ...pessoa }; 
} */

const novasPessoas = new Map();
for (const pessoa of pessoas) {
  const { id } = pessoa;
  novasPessoas.set(id, { ...pessoa });
}

console.log(novasPessoas.get(1));

for (const [identifier, { id, nome }] of novasPessoas) {
  console.log(identifier, id , nome)
  // console.log(identifier);
  // console.log(id)
  // console.log(nome);
}

