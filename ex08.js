const prompt = require (`prompt-sync`)();

console.log("--- Cálculo do volume de uma caixa retangular ---");

//Entrada de dados
let comprimento = Number(prompt("Insira o valor do comprimento da caixa retangular: "));
let largura = Number(prompt("Insira o valor da largura da caixa retangular: "));
let altura = Number(prompt("Insira o valor da altura da caixa retangular: "));
//Processamento
let volume = comprimento * largura * altura;

//Saída
console.log(`O Volume da caixa retangular: ${volume.toFixed(2)} `);