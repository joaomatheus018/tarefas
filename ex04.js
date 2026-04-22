const prompt = require (`prompt-sync`)();

console.log("--- Cálculo da quantidade de Combustível Gasta em uma viagem ---");

//Entrada de dados
let distância = Number(prompt("Insira a distância percorrida em quilômetros (km): "));
let consumo = Number(prompt("Insira o consumo do veículo em quilômetros por litros (km/l): "));
//Processamento
let litros = distância / consumo;

//Saída
console.log(`A quantidade de litros de Combustível gasta na viagem: ${litros.toFixed(2)} litros`);