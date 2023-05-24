class DispositivoEletronico {
  constructor(nome) {
    this.nome = nome;
    this.ligado = false;
  }

  ligar() {
    if (this.ligado) {
      console.log(`${this.nome} já está ligado!`)
      return;
    }
    this.ligado = true;
  }

  desligar() {
    if (!this.ligado) {
      console.log(`${this.nome} já está desligado!`)
      return;
    }
    this.ligado = false;
  }
}

class Smartphone extends DispositivoEletronico {
  constructor(nome, cor) {
    super(nome);
    this.cor = cor;
    this.wifi = false;
  }

  wifiLigar() {
    if (!this.wifi) {
      this.wifi = true;
      return;
    }
    this.wifi = false;
  }
}

class Tablet extends DispositivoEletronico {
  constructor(nome, bateria) {
    super(nome);
    this.bateria = bateria;
  }

  ligar() {
    if (this.bateria > 30) {
      this.ligado = true;
      console.log('Aparelho com bateria acima de 30%, aparelho ligado!');
      return;
    }
    console.log('Aparelho com bateria abaixo de 30%, não poderá ser ligado!');
  }
}

const iPhone = new Smartphone('X', 'white');

console.log(iPhone);

iPhone.ligar();
iPhone.wifiLigar();

console.log(iPhone);

const iPad = new Tablet('Ipad', 31);

console.log(iPad);

iPad.ligar();

console.log(iPad);

