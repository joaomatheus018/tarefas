const prompt = require('prompt-sync')();

console.log("--- Ordenação de Três Números Inteiros ---");

// 1. Entrada de Dados
// Solicitamos os três números inteiros ao usuário
let num1 = Number(prompt("Digite o primeiro número: "));
let num2 = Number(prompt("Digite o segundo número: "));
let num3 = Number(prompt("Digite o terceiro número: "));

// 2. Processamento
// Utilizamos uma variável temporária para realizar as trocas de valores (swap)
let temp;

if (num1 > num2) {
    temp = num1;
    num1 = num2;
    num2 = temp;
}

if (num1 > num3) {
    temp = num1;
    num1 = num3;
    num3 = temp;
}

if (num2 > num3) {
    temp = num2;
    num2 = num3;
    num3 = temp;
}

// 3. Saída de Dados
console.log(`Valores em ordem crescente: ${num1}, ${num2}, ${num3}`);