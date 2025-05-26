
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

let escalaTemperatura = ['#3b4cc0', '#3c4ec2', '#3e51c4', '#3f53c6', '#4155c8', '#4257ca', '#445acc', '#455cce', 
    '#475ed0', '#4860d1', '#4a62d3', '#4b64d4', '#4d66d6', '#4e68d8', '#506ada', '#516cdc', '#536edd', '#5470df', 
    '#5672e1', '#5774e3', '#5976e4', '#5a78e6', '#5c7ae8', '#5d7cea', '#5f7eeb', '#6080ed', '#6282ef', '#6384f1', 
    '#6586f2', '#6688f4', '#688af6', '#698cf8', '#6b8ef9', '#6c90fb', '#6e92fd', '#6f94ff', '#7196ff', '#7298ff', 
    '#749aff', '#759cff', '#779eff', '#78a0ff', '#7aa2ff', '#7ba4ff', '#7da6ff', '#7ea8ff', '#80aaff', '#81acff', 
    '#83aeff', '#84b0ff', '#86b2ff', '#87b4ff', '#89b6ff', '#8ab8ff', '#8cbaff', '#8dbcff', '#8fbeff', '#90c0ff', 
    '#92c2ff', '#93c4ff', '#95c6ff', '#96c8ff', '#98caff', '#99ccff', '#9bceff', '#9cd0ff', '#9ed2ff', '#9fd4ff', 
    '#a1d6ff', '#a2d8ff', '#a4daff', '#a5dcff', '#a7deff', '#a8e0ff', '#aae2ff', '#abe4ff', '#ade6ff', '#aee8ff', 
    '#b0eaff', '#b1ecff', '#b3eeff', '#b4f0ff', '#b6f2ff', '#b7f4ff', '#b9f6ff', '#baf8ff', '#bcfaff', '#bdfcff', 
    '#bffeff', '#c0fff7', '#c2ffe5', '#c3ffd3', '#c5ffc1', '#c6ffaf', '#c8ff9d', '#c9ff8b', '#cbff79', '#ccff67', 
    '#ceff55', '#cfff43', '#d1ff31', '#d2ff1f', '#d4ff0d', '#d5ff00', '#d7ff00', '#d8ff00', '#daff00', '#dbff00', 
    '#ddff00', '#deff00', '#e0ff00', '#e1ff00', '#e3ff00', '#e4ff00', '#e6ff00', '#e7ff00', '#e9ff00', '#eaff00', 
    '#ecff00', '#edff00', '#efff00', '#f0ff00', '#f2ff00', '#f3ff00', '#f5ff00', '#f6ff00', '#f8ff00', '#f9ff00', 
    '#fbff00', '#fcff00', '#feff00', '#ffff00', '#ffe800', '#ffd100', '#ffba00', '#ffa300', '#ff8c00', '#ff7500', 
    '#ff5e00', '#ff4700', '#ff3000', '#ff1900', '#ff0200', '#ff000e', '#ff0025', '#ff003c', '#ff0053', '#ff006a', 
    '#ff0081', '#ff0098', '#ff00af', '#ff00c6', '#ff00dd', '#ff00f4', '#ff0cfb', '#ff23fa', '#ff3af9', '#ff51f8', 
    '#ff68f7', '#ff7ff6', '#ff96f5', '#ffadf4', '#ffc4f3', '#ffdbf2', '#fff2f1', '#ffe9e3', '#ffd0d5', '#ffb7c7', 
    '#ff9eb9', '#ff85ab', '#ff6c9d', '#ff538f', '#ff3a81', '#ff2173', '#ff0865', '#ff0057', '#ff0049', '#ff003b', 
    '#ff002d', '#ff001f', '#ff0011', '#ff0003', '#ff0000', '#f70000', '#ef0000', '#e70000', '#df0000', '#d70000', 
    '#cf0000', '#c70000', '#bf0000', '#b70000', '#af0000', '#a70000', '#9f0000', '#970000', '#8f0000', '#870000', 
    '#7f0000', '#770000', '#6f0000', '#670000', '#5f0000', '#570000', '#4f0000', '#470000', '#3f0000', '#370000', 
    '#2f0000', '#270000', '#1f0000', '#170000', '#0f0000', '#070000'];

    let inputCampo1 = document.querySelector("body")
    inputCampo1.style.background = escalaTemperatura[10];


function decrementar() {

    let campoInput = document.getElementById("value");
    let converteValorInputnumero = +campoInput.value;

    if (isNaN(converteValorInputnumero)) {

        alert("Digite somente números!");
        return;
    }

   campoInput.value = converteValorInputnumero - 1;

}

function incrementar() {

let campoInput1 = document.getElementById("value");
let converteString_Numero = +campoInput1.value;

if (isNaN(converteString_Numero)) {

    alert("Digite somente números!")

    return;
}

campoInput1.value = ++converteString_Numero; // Usando o incremento ++

}
