
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


const escalaTemperatura = [
  '#3a4cc0', '#3c4fc3', '#4054c7', '#4258ca', '#465dcf', '#4860d1', '#4c66d6', '#4e69d8', '#526edc', '#5673e0',
  '#5876e2', '#5c7be5', '#5f7ee7', '#6383ea', '#6586ec', '#698bef', '#6c8ef1', '#7093f3', '#7497f5', '#779af6',
  '#7b9ef8', '#7ea1f9', '#82a5fb', '#85a8fb', '#89acfc', '#8daffd', '#90b2fe', '#94b5fe', '#97b8fe', '#9bbbfe',
  '#9dbdfe', '#a2c0fe', '#a4c2fe', '#a8c5fd', '#acc8fc', '#afcafb', '#b3ccfa', '#b6cef9', '#b9d0f8', '#bcd1f6',
  '#c0d3f5', '#c2d4f3', '#c6d6f1', '#c9d7ee', '#ccd8ed', '#cfd9ea', '#d1dae8', '#d5dbe5', '#d7dbe2', '#dadcdf',
  '#dddcdb', '#dfdbd9', '#e2d9d4', '#e4d8d1', '#e7d6cd', '#e8d5ca', '#ebd3c6', '#ecd1c3', '#eecfbe', '#f0ccb9',
  '#f1cab6', '#f2c7b2', '#f3c5af', '#f4c2aa', '#f5c0a7', '#f6bca2', '#f6ba9f', '#f6b69a', '#f7b295', '#f7b092',
  '#f6ab8d', '#f6a98a', '#f6a486', '#f5a182', '#f49d7e', '#f39879', '#f39576', '#f19072', '#f08d6f', '#ee876a',
  '#ed8467', '#eb7f63', '#ea7b60', '#e7755c', '#e57057', '#e36c54', '#e06650', '#de624e', '#db5c4a', '#d95847',
  '#d65243', '#d34d40', '#cf463d', '#cc3f39', '#c93b37', '#c53233', '#c22d31', '#be232d', '#bb1a2b', '#b60d28', '#b30326'
];

const valorMinimo = -50;
const valormaximo = 50;

function mudaBackGround() {

let campoInput3 = document.getElementById("value");
let valorDeCampoInput3 = campoInput3.value;
let converteNumber = Number(valorDeCampoInput3);

let indiceCores = [];

for (let i = valorMinimo; i <= converteNumber; i++) {  
    
 indiceCores.push(i);

 let inputCampo1 = document.querySelector("body")
    inputCampo1.style.background = escalaTemperatura[indiceCores.length];
   
}
}


function mudaCor() {

let campoInput3 = document.getElementById("value");
let valorDeCampoInput3 = campoInput3.value;
let converteNumber = Number(valorDeCampoInput3);

let indiceCores = [];

for (let i = valorMinimo; i <= converteNumber; i++) {  
    
 indiceCores.push(i);

 let inputCampo1 = document.querySelector("body")
    inputCampo1.style.background = escalaTemperatura[indiceCores.length];
   
}



}



function decrementar() {

    let campoInput = document.getElementById("value");
    let converteValorInputnumero = +campoInput.value;

    if (isNaN(converteValorInputnumero)) {

        alert("Digite somente números!");
        return;
    }

   campoInput.value = converteValorInputnumero - 1;
   mudaCor();

}

function incrementar() {

let campoInput1 = document.getElementById("value");
let converteString_Numero = +campoInput1.value;

if (isNaN(converteString_Numero)) {

    alert("Digite somente números!")

    return;
}

campoInput1.value = ++converteString_Numero; // Usando o incremento ++


mudaCor();

}


