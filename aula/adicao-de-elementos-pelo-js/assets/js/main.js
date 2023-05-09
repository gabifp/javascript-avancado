let elemento;
let frase;
let divDentro;

divDentro = document.createElement('div');
document.querySelector('.container').appendChild(divDentro);

const elementosFrases  = [
    {tag: 'p', texto: 'Frase 1'},
    {tag: 'div', texto: 'Frase 2'},
    {tag: 'footer', texto: 'Frase 3'},
    {tag: 'section', texto: 'Frase 4'}
];

const [e1, e2, e3, e4] = [elementosFrases[0].tag, elementosFrases[1].tag, elementosFrases[2].tag, elementosFrases[3].tag];
const [f1, f2, f3, f4] = [elementosFrases[0].texto, elementosFrases[1].texto, elementosFrases[2].texto, elementosFrases[3].texto];
const listaElementos = [e1, e2, e3, e4];
const listaFrases = [f1, f2, f3, f4];


for (i in listaElementos) {
    let chaveElemento = listaElementos[i]
    let chaveFrases = listaFrases[i]

    elemento = document.createElement(`${chaveElemento}`);
    frase = document.createTextNode(`${chaveFrases}`);

    document.querySelector('div').appendChild(elemento);
    document.querySelector(`div ${chaveElemento}`).appendChild(frase);
};
