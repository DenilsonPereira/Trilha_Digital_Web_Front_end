// Operadores Booleanos

// Igualdade:      == (ou ===)
// Desigualdade:   != (ou !==)
// Menor:          <
// Menor ou igual: <=
// Maior:          >
// Maior ou igual: >=

const numero = 10;
console.log(numero >= 20)
console.log(numero == 10)
console.log(numero == '10')
console.log(numero === '10')
console.log(numero != '10')
console.log(numero !== '10')

// Conjunções lógicas

//AND => &&
let idade = 18;
let tenhoCNH = true;

const possoDirigir = idade>=18 && tenhoCNH === true;

console.log('Posso dirigir? ', possoDirigir)

//OR => ||
idade = 40;

const votoFacultativo = idade<18 || idade>=70;

console.log('Meu voto é facultativo?', votoFacultativo)

//NOT => !

const estouGostando = false;

console.log(!estouGostando)