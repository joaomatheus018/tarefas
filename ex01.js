// Importando o módulo para ler dados do teclado
const prompt = require('prompt-sync')();

console.log("--- Conversor de Temperatura ---");

// Importante: prompt sempre lê TEXTO.
// Usamos Number() para converter, igual ao (float) no C.
let celsius = Number(prompt("Insira a temperatura em graus Celsius: "));

// Realiza o cálculo da conversão
let fahrenheit = (celsius * 9 / 5) + 32;

// Template String (usa crases): facilita exibir variáveis no meio do texto
console.log(`A temperatura de ${celsius}°C convertida em Fahrenheit é: ${fahrenheit}°F`);