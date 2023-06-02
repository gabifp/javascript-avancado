function rand(max = 0, min = 3) {
  max *= 1000;
  min *= 1000;

  return Math.floor(Math.random() * (max- min) + min);
}

function espera(msg, tempo) {
  return new Promise((resolve, reject) => {
    if (typeof msg !== 'string') reject('error');
    
    setInterval(() => {
      resolve(msg.toUpperCase() + ' - Passei na promise.');
    }, tempo); 
  });
}

/* espera('Fase 1', rand())
  .then(fase => {
    console.log(fase)
    return espera('Fase 2', rand())
  })
  .then(fase => {
    console.log(fase)
    return espera('Fase 3', rand())
  })
  .then(fase => {
    console.log(fase);
    return fase;
  })
  .then(fase => {
    console.log('Terminamos na fase: ', fase);
  })
  .catch(e => console.log(e)); */

async function executa() {
  try {
    // Tirando o await a função não será mais retornada quando tiver finalizado, o retorno será: Promise { <pending> }
    const fase1  = espera('Fase 1', 1000);
    console.log(fase1);

    //mas sabendo o tempo que ela vai levar (1 segundo), coloquei um console no setTimeout para verificar a promise novamente depois de 2 segundos.
    setTimeout(() => {
      console.log(fase1);
    }, 2000);
  
    const fase2  = await espera('Fase 2', rand());
    console.log(fase2);
  
    const fase3  = await espera('Fase 3', rand());
    console.log(fase3);
  
    console.log('Terminamos na...: ', fase3);
  } catch(e) {
    console.log(e);
  }
}

executa();

// Estados da promise:

/* 
  pending -> pendente
  fullfield -> resolvida
  reject -> rejeitada
*/ 