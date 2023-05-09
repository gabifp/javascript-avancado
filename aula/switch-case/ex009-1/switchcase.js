// function textDate() {
//     const result = document.querySelector('.result');
//     const data = new Date();
//     const diaSemana = data.getDay();
//     let diaSemanaTexto;

//     switch (diaSemana) {
//     case 0:
//         diaSemanaTexto = 'Domingo';
//         break;
//     case 1:
//         diaSemanaTexto = 'Segunda-feira';
//         break;
//     case 2:
//         diaSemanaTexto = 'Terça-feira';
//         break;
//     case 3:
//         diaSemanaTexto = 'Quarta-feira';
//         break;
//     case 4:
//         diaSemanaTexto = 'Quinta-feira';
//         break;
//     case 5:
//         diaSemanaTexto = 'Sexta-feira';
//         break;
//     case 6:
//         diaSemanaTexto = 'Sábado';
//         break;
//     default:
//         diaSemanaTexto = '';
//     }

//     result.innerHTML = `${diaSemanaTexto}, ${data.getDate(2019-10-7)}`

//     return diaSemanaTexto
// }

// textDate();

const h1 = document.querySelector('.container h1'); 
const data = new Date();

h1.innerHTML = data.toLocaleDateString('pt-BR', {dateStyle: 'full'});
h1.innerHTML += ' '
h1.innerHTML += data.toLocaleTimeString('pt-BR', {timeStyle: 'short'});

//houve há possibilidade ainda, de mudar os cases por array.