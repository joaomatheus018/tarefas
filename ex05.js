const prompt = require (`prompt-sync`)();

console.log("--- Cálculo do valor de uma prestação em Atraso ---");

//Entrada de dados
let valor = Number(prompt("Insira o valor original da prestação: "));
let meses = Number(prompt("Insira o número de meses em atraso: "));
let taxa = Number(prompt("Insira a taxa de juros mensal: "));
//Processamento
let valor1 = valor * (1 + (taxa / 100) * meses);

//Saída
console.log(`Valor da prestação em atraso: ${valor1.toFixed(2)} reais`);