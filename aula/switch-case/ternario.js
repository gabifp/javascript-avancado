const pontuacaoUsuario = 1000;
const nivelUsuario = pontuacaoUsuario >= 1000 ? 'Usuario VIP' : 'Usuário normal';

// Fault set

const corUsuario = null;
const corPadrao = corUsuario || 'Preta';

/**
 * if (pontuacaoUsuario >= 1000) {
 *     console.log('Usuário VIP');
 * } else {
 *     console.log('Usuário comum');
 * }
 */

console.log(nivelUsuario, corPadrao);