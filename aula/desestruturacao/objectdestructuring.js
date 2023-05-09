const pessoa = {
    nome: 'Gabriela',
    sobrenome: 'Pimentel',
    idade: 30,
    endereco: {
        rua: 'Avenida Brasil',
        numero: 89
    }
};

// Atribuição via Desestruturação

// Nesse caso usei a atribuição simples
const meu_nome = pessoa.nome;

// No caso abaixo eu estou informando pelo nome da chave o valor que quero do objeto pessoa
const { nome } = pessoa

// Nesse caso eu estou usando o nome da chave e dando um novo nome a variável que receberá o valor da chave
const { sobrenome: meu_sobrenome, endereco: {rua: minha_rua, numero: meu_numero } } = pessoa

console.log(meu_nome);
console.log(nome);
console.log(meu_sobrenome);
console.log(minha_rua, meu_numero);