//Laços Numéricos: FOR

const input = require('readline-sync');

//O problema

let nota1 = Number(input.question('Digite a nota 1: '));
let nota2 = Number(input.question('Digite a nota 2: '));
let nota3 = Number(input.question('Digite a nota 3: '));

let media = (nota1 + nota2 + nota3) / 3;

//Acumulador

let acumulador = 0;

acumulador +=10

acumulador++

// //Estrutura for

for(let i = 0; i<3; i++){
    console.log(i)
}

for(let i = 12; i>3; i--){
    console.log(i)
}

//Resolvendo o problema inicial
let nota;
let soma = 0;
for (let i = 0; i<3; i++){
    nota = Number(input.question(`Informe a ${i+1} nota do aluno: `))
    soma = soma + nota
}
console.log(`Amédia é ${soma/3}`)