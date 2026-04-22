const prompt = require (`prompt-sync`)();

console.log("--- Conversão de real para Dólar ---");

//Entrada de dados
let real = Number(prompt("Insira um valor em real (R$): "));
//Processamento
let dólar = real / 5.60;

//Saída
console.log(`Valor convertido para dólar: ${dólar.toFixed(2)} dólares`);