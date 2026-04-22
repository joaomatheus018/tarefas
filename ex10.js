const prompt = require (`prompt-sync`)();

console.log("--- Cálculo da diferença entre dois números inteiros ---");

//Entrada de dados
let primeiro = Number(prompt("Insira o primeiro número inteiro: "));
let segundo = Number(prompt("Insira o segundo número inteiro: "));
//Processamento
let diferença = primeiro - segundo;

//Saída
console.log(`A diferença dois números: ${diferença.toFixed(2)} `);