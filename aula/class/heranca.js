class DispositivoEletronico {
  constructor(nome) {
    this.nome = nome;
    this.ligado = false;
  }

  ligar() {
    if (this.ligado) {
      console.log(`${this.nome} já está ligado!`)
    }
    this.ligado = true;
  }

  desligar() {
    if (!this.ligado) {
      console.log(`${this.nome} já está desligado!`)
    }
    this.ligado = false;
  }
}

// implemente a classe Smartphone que é extend da classe DispositivoEletronico

