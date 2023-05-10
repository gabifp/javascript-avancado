const _velocidade = Symbol('velocidade');

class Carro {
  constructor(nome) {
    this.nome = nome,
    this[_velocidade] = 0
  }

  /* Nesse caso utilizamos o set porque a velocidade por ser uma chave Symbol (chave de valor único e imutável) 
   * não poderia ter seu valor alterado mesmo que fosse atribuido diretamente (this[_velocidade] = n).
   * Para termos como acessar o valor da chave _velocidade e poder alterá-lo após validações, usamos o set e get.
   */

  set velocidade(valor) {
    if (typeof valor !== 'number') return;
    if (valor >= 100 || valor <= 0) return;
    this[_velocidade] = valor;
  }

  get velocidade() {
    return this[_velocidade];
  }

  acelerar() {
    if (this[_velocidade] >= 100) return;
    this[_velocidade]++;
  }

  frear() {
    if (this[_velocidade] <= 0) return;
    this[_velocidade]--;
  }
}

const c1 = new Carro('Uno');
console.log(c1.velocidade);


