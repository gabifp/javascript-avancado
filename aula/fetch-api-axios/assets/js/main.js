/* SEM USAR AXIOS:

fetch('pessoas.json')
  .then(resposta => resposta.json())
  .then(json => carregaPagina(json));
 */

// USANSO AXIOS:
axios('pessoas.json')
  .then(response => carregaPagina(response.data));  

function carregaPagina(json) {
  const tbody = document.querySelector('.tbody');

  json.map(pessoa => {
    const tr = document.createElement('tr');
    
    const tdNome = document.createElement('td');
    tdNome.innerHTML = pessoa.nome;
    tr.appendChild(tdNome);

    const tdCPF = document.createElement('td');
    tdCPF.innerHTML = pessoa.cpf;
    tr.appendChild(tdCPF);

    const tdIdade = document.createElement('td');
    tdIdade.innerHTML = pessoa.idade;
    tr.appendChild(tdIdade);

    const tdSalario = document.createElement('td');
    tdSalario.innerHTML = pessoa.salario;
    tr.appendChild(tdSalario);

    tbody.appendChild(tr);
  })
}