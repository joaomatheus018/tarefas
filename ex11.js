const prompt = require (`prompt-sync`)();

console.log("--- Conversão de Dólar para Real ---");

//Entrada de dados
let dólar = Number(prompt("Insira um valor em dólar (US$): "));
//Processamento
let real = dólar * 5.60;

//Saída
console.log(`Valor convertido para real: ${real.toFixed(2)} reais`);