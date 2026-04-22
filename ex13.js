const prompt = require (`prompt-sync`)();

console.log("--- Cálculo da soma dos quadrados de três números ---");

//Entrada de dados
let primeiro = Number(prompt("Insira o primeiro número: "));
let segundo = Number(prompt("Insira o segundo número: "));
let terceiro = Number(prompt("Insira o terceiro número: "));
//Processamento
let soma = (primeiro * primeiro) + (segundo * segundo) + (terceiro * terceiro);

//Saída
console.log(`resultado das soma dos quadrados: ${soma.toFixed(2)}`);