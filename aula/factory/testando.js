/**
 * Construtora -> Pessoa (new)
 * 
 * - começa com letra maiúscula
 * - sempre temos que colocat o new antes do nome da função quando vamos chamá-la
 * - ela inicializa um molde de objeto, 
 * o corpo dessa função já é um objeto, portanto eu não coloco return pra ela
 * - não separamos os atributos dentro da função por ',' e sim por '; como no JS'
 * - existem atributos ou métodos privados que só poderão ser acessados dentro da função e 
 * - existem atributos ou métodos públicos, que são acessados com o .atributo ... 
 * como por exemplo: p1.nome ou p1.metodo. 
 */

 function Pessoa(nome, sobrenome) {
  // Atributos ou métodos privados
  const id = 1233456;

  const metodoInterno = function() {
    console.log('comparar id com alguma coisa');
  };

  // Atributos ou métodos públicos
  this.nome = nome;
  this.sobrenome = sobrenome;

  this.metodo = function() {
    console.log(this.nome + ': sou um método');
  }
}

inicializandoObjeto = new Pessoa('Gabriela', 'Pimentel');

console.log(inicializandoObjeto.metodo);

//const p1 = new Pessoa('Luiz', 'Otávio');
//const p2 = new Pessoa('Maria', 'Oliveira');