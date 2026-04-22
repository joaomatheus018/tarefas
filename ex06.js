const prompt = require (`prompt-sync`)();

console.log("--- Troca de valores entre variáveis ---");

//Entrada de dados
let A = Number(prompt("Insira o valor para a variável A: "));
let B = Number(prompt("Insira o valor para a variável B: "));
//Processamento
let temp = A; A = B; B = temp;

//Saída
console.log(`Antes da troca: A =  ${temp} | B = ${A}`);
console.log(`Depois da troca: A = ${A} | B = ${B}`);