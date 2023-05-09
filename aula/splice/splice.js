const nomes = ['Maria', 'João', 'Eduardo', 'Gabriel', 'Júlia'];

// nomes.splice(indice, quantidade removidos, elem1, elem2, elem3);

const removidos = nomes.splice(3, 1, 'Fernanda');
console.log(nomes,removidos);