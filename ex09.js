const prompt = require (`prompt-sync`)();

console.log("--- Cálculo do Volume da Lata de Óleo ---");

//Entrada de dados
let valor = Number(prompt("Insira um valor númerico inteiro: "));
//Processamento
let resultado = valor * valor;

//Saída
console.log(`valor do númereo elevado ao quadrado: ${resultado.toFixed(2)}`);