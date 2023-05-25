//COERÇÃO (CONVERSÃO) DE TIPOS

// 1. Coerção Explícita (Manual)
const numero = 10;

console.log(numero, typeof numero);

const numeroEmFormatoString = String(numero);

console.log(numeroEmFormatoString, typeof numeroEmFormatoString);

console.log(Number('25054'));
console.log(parseFloat('21.5'));
console.log(parseInt('21.5'));

console.log(Boolean(0));

console.clear();

// 2. Coerção Implícita (Automática)

console.log(10 + '1');         //Ele concatena e vira String
console.log(10 - '1');        //Ele converte o '1' para Number
console.log(10 * '3');       //Ele converte o '3' para Number
console.log(10 - 'asasas'); //Ele retorna NaN

// Outros exemplos

//Qual a saída desse código?
let n = 1 + '1';
n = n - 1;
console.log(n);

//Qual a saída desse código?
console.log(2 + 3 + 4 + '5');

//Qual a saída desse código?
console.log('5' + 2 + 3 + 4);

//Qual a saída desse código?
console.log('10' - '4' - '3' - 2 - '5'); 