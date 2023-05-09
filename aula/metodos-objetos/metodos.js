const produto = { nome: 'Produto', preco: 1.8 };
/* const caneca = {
  ...produto, // agora é uma cópia e não mais o tenho como referencia de endereço na memória  
  material: 'porcelana'
}; */

/* 

*/

// com o assign eu tbm copio o objeto, em vez de referenciar o endereço da memória, porém com uma maneira mais verbosa
const caneca = Object.assign({}, produto, { material: 'porcelana' });

caneca.nome = 'Outro nome';
caneca.preco = 2.5;
console.log(produto);
console.log(caneca);

// Com o getOwnPropertyDescriptor eu consigo ver como foram configurados os atributos do objeto  
console.log(Object.getOwnPropertyDescriptor(produto, 'nome'));

// Com o values consigo acessar o valor de cada atributo do objeto.
console.log(Object.values(produto));

// Com o keys consigo acessar a chave de cada atributo do objeto.
console.log(Object.keys(produto));

// Com o entries consigo acessar o valor e a chave de cada atributo do objeto.
console.log(Object.entries(produto));

// Com o entries dentro de um for consigo acessar todos os atributos por chave e valor, mas poderia retirar o valor e as [] e acessar apenas chave
for (let [chave, valor] of Object.entries(produto)) {
  console.log(chave, valor);
}


