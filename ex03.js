const prompt = require (`prompt-sync`)();

console.log("--- Cálculo do Volume da Lata de Óleo ---");

//Entrada de dados
let raio = Number(prompt("Insira o raio da lata (cm): "));
let altura = Number(prompt("Insira a altura da lata (cm): "));
//Processamento
let Volume = 3.14159 * raio * raio * altura;

//Saída
console.log(`O Volume da lata de Óleo é: ${Volume.toFixed(2)} cm³`);