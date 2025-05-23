
/* Convertere o que será inserido no campo <input> em número.
1º Opção (Mais simples e rápida) - Usar o operador unário + .

const pegacampoInput = +document.getElementById("value");

2º Opção - Usando Number() - Converte a string para número (inteiro ou decimal).
const pegaCampoInput = document.getElementById("value");

const number = Number(pegaCampoInput);

3º Opção - Usando parseInt()
Converte para inteiro, ignorando casas decimais.
Ideal para valores inteiros. Se a string começar com números, ele converte até encontrar um caractere inválido.
Usa-se 10 para definir base decimal ".value, 10);"

const numero = parseInt(document.getElementById('value').value, 10);

4º Opção - Usando parseFloat()
Converte para número decimal (ponto flutuante).

const numero = parseFloat(document.getElementById('value').value);
Útil para valores com casas decimais.

*/

const pegaCampoInput = document.getElementById("value");
