// Importando o módulo para ler dados do teclado
const prompt = require('prompt-sync')();

console.log("--- Conversor de Temperatura ---");

// Importante: prompt sempre lê TEXTO.
// Usamos Number() para converter, igual ao (float) no C.
let fahrenheit = Number(prompt("Insira a temperatura em graus fahrenheit: "));

// Realiza o cálculo da conversão
let celsius = (fahrenheit -32 ) * 5 / 9;

// Template String (usa crases): facilita exibir variáveis no meio do texto
console.log(`O resultado em celsius é: ${celsius.toFixed(1)}°C`);