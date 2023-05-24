class ControleRemoto {
  constructor(tv) {
    this.tv = tv;
    this.volume = 0;
  }

  // Método de instância:
  aumentarVolume() {
    this.volume =+ 2;
  }

  diminuirVolume() {
    this.volume =- 2;
  }

  // Metódo estático
  static trocarPilha() {
    console.log('Ok, pilhas trocadas.')
  }
}

const controle = new ControleRemoto('Samsung');
 
console.log(controle);
controle.aumentarVolume();
console.log(controle);

ControleRemoto.trocarPilha();
console.log(controle);


/**
 * Métodos de instância: 
 * 
 * São aqueles que estão associados a uma instância específica de uma classe ou objeto. 
 * Eles são definidos no protótipo da classe e podem acessar e manipular os dados da instância em que são chamados. 
 * Esses métodos são invocados usando a notação de ponto após a criação de um objeto a partir da classe.
 * 
 * -----------------------------
 * 
 * Métodos estáticos:
 * 
 * Métodos estáticos, por outro lado, são definidos na classe em si e não em suas instâncias individuais. 
 * Eles são acessíveis diretamente na classe, independentemente de qualquer instância. 
 * Esses métodos não têm acesso aos dados específicos da instância, pois não são chamados em um objeto específico.
 * 
 * -----------------------------
 * 
 * Adendo: Pelo que eu entendi, tem muito a ver com o que vai ser necessário na manipulação de dados referente a instância, 
 * coisa que não é alvo do caso estático, não há dados recebidos de um objeto.
 */