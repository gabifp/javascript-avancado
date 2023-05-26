class ValidadorCPF {
  constructor(cpf) {
    Object.defineProperty(this, 'cpfLimpo', {
      writable: false,
      enumerable: true,
      configurable: false,
      value: cpf.replace(/\D+/g, '')
    });
  }

  valida() {
    if (!this.cpfLimpo) return false;
    if (typeof this.cpfLimpo !== 'string') return false;
    if (this.cpfLimpo.length !== 11) return false;
    if (this.isSequencia()) return false;

    const cpfParcial = this.cpfLimpo.slice(0, -2);
    const digito1 = ValidadorCPF.criaDigito(cpfParcial);
    const digito2 = ValidadorCPF.criaDigito(cpfParcial + digito1);

    const novoCpf = cpfParcial + digito1 + digito2;
    return novoCpf === this.cpfLimpo;
  }

  // Essa função será static pois não utiliza nenhum dado da instância para ser executada.
  static criaDigito(cpfParcial) {
    const cpfArray = Array.from(cpfParcial);

    let regressivo = cpfArray.length + 1;
    const total = cpfArray.reduce((ac, val) => {
      ac += (regressivo * Number(val));
      regressivo--;
      return ac;
    }, 0);

    const digito = 11 - (total % 11);
    return digito > 9 ? '0' : String(digito);
  }

  isSequencia() {
    const sequencia = this.cpfLimpo.charAt(0).repeat(this.cpfLimpo.length);
    return sequencia === this.cpfLimpo;
  }
}

const validadorCPF = new ValidadorCPF('409.424.758-01');

if (validadorCPF.valida()) {
  console.log('Cpf válido');
} else {
  console.log('Cpf inválido');
}