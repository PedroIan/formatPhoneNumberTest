/**
 * Desafio: escrever uma função que aceite um array de inteiros (de 0 a 9), que retorne uma string desses numeros no formato de um telefone (`"(XX) XXXX-XXXX"` ou `"(XX) XXXXX-XXXX"`).
 * Caso nao seja um telefone valido, retornar uma string vazia.
 *
 * Voce pode testar o seu codigo rodando o comando `npm run test` no terminal
 * e tambem pode alterar o arquivo `index.test.js` se desejar.
 * Apos enviado, seu codigo sera validado com outros cenarios de teste tambem.
 *
 * @example `formatPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0])` retorna `"(12) 3456-7890"`
 * @param numbers array de digitos inteiros (0-9) com os numeros do telefone
 * @returns numero de telefone formatado
 */
function formatPhoneNumber(numbers) {
  const copy = [...numbers];
  const firstTwo = copy.splice(0, 2).join('');
  const lastFour = copy.splice(copy.length - 4, 4).join('');
  return `(${firstTwo}) ${copy.join('')}-${lastFour}`;
}

module.exports = formatPhoneNumber;
