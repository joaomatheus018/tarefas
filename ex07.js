const prompt = require('prompt-sync')();

console.log("--- Adição e Multiplicação de quatro números Inteiros ---");

// Entrada de dados
// Mudamos os nomes para n1, n2, n3, n4 porque variáveis não podem começar com números
let n1 = Number(prompt("Insira o primeiro valor numérico inteiro: "));
let n2 = Number(prompt("Insira o segundo valor numérico inteiro: "));
let n3 = Number(prompt("Insira o terceiro valor numérico inteiro: "));
let n4 = Number(prompt("Insira o quarto valor numérico inteiro: "));

// Processamento
let adicao = n1 + n2 + n3 + n4;
let multiplicacao = n1 * n2 * n3 * n4;

// Saída
console.log("----------------------------------------------------------");
console.log(`O resultado da adição é: ${adicao}`);
console.log(`O resultado da multiplicação é: ${multiplicacao}`);
console.log("----------------------------------------------------------");