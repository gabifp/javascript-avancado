document.addEventListener('click', e => {
  const el = e.target;
  const tag = el.tagName.toLowerCase();

  if (tag === 'a') {
    e.preventDefault();
    carregaPagina(el);
  }
});

async function carregaPagina(el) {
  const href = el.getAttribute('href');

  /* Sem o uso de async e await:

  fetch(href)
    .then(response => {
      if (response.status !== 200) throw new Error('ERRO');
      return response.text();
    })
    .then(html => carregaResultado(html))
    .catch(e => console.log(e)); */
  
  try {
    const response = await fetch(href); 
    if (response.status !== 200) throw new Error('ERRO');

    const html = await response.text();
    carregaResultado(html);
  } catch(e) {
    console.error(e);
  }

  /*
  DO JEITO ANTIGO SEM O ASYNC E AWAIT:

  .then(response => {
    carregaResultado(response);
  })
  .catch(error => {
    console.log(error);
  }) */
}

function carregaResultado(response) {
  const resultado = document.querySelector('.resultado');
  resultado.innerHTML = response;
}

function back() {
  location.reload();
}
