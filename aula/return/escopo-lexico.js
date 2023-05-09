const nome = 'Gabi';

function falaNome() {
  console.log(nome);
}

function usaFalaNome() {
  const nome = 'Fer';
  falaNome();
}

usaFalaNome();