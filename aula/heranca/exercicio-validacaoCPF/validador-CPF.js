function IniciaValidador() {
  const cpf = document.querySelector('.input-cpf').value;
  console.log('CPF assigment: ', cpf);
  const cpfArray = Array.from(cpf);
  let cpfParcial = cpfArray.length == 11 ? cpfArray.slice(0, 9) : cpfArray;
  let cpfFinal = [];
  console.log('Partial CPF: ', cpfParcial);
 
  for (let i = 0; i < 2; i++) {
    let digito = this.digitoCPF(cpfParcial);
    console.log('CPF DIGITOS: ', digito);
    cpfParcial.push(digito);
  } 

  cpfFinal = Array.from(cpfParcial);

  console.log('CPF FINAL: ', cpfFinal);
  console.log('CPF INICIAL: ', cpfArray);

  if (cpfFinal.indexOf(10) === cpfArray.indexOf(10) && cpfFinal.indexOf(9) === cpfArray.indexOf(9)) {
    return  document.querySelector('.display').innerHTML = 'CPF VÁLIDO!';
  }

  return document.querySelector('.display').innerHTML = 'CPF INVÁLIDO!';
}

IniciaValidador.prototype.digitoCPF = function (arrayCpf) {
  const somaCPF = arrayCpf
    .map((value, index, arrayCpf) => {
      const regressivo = arrayCpf.length + 1;
      return value * (regressivo - index);
    })
    .reduce((acc, val) => acc + Number(val), 0);

  const retorneDigito = 11 - (somaCPF % 11);

  return retorneDigito > 9 ? '0' : String(retorneDigito);
};

/*
Substituindo os pontos por '', para obter somente os números com expressões regulares.
let cpfLimpo = cpf.replace(/\D+/g, '');
console.log(cpfLimpo);
*/

function runConstructor() {
  const cpf = document.querySelector('.input-cpf').value;
  const displayCPF = new IniciaValidador(cpf);
  displayCPF;
}