//Funções

function saudacao() {
    console.log('Olá, seja bem-vindo ao nosso curso de Javascript!');
}

saudacao();

console.clear();

// Como passar parâmetros

function saudacao(nome) {
    console.log(`Olá ${nome}, seja bem-vindo!`);
}

saudacao('Denilson');

console.clear();

// Retorno da função

function soma(n1,n2) {
    return n1+n2;
}

console.log(soma(5,4));

console.clear();

// Função recursiva

function harm(n) {
    if (n===1){
        return 1;
    }else{
        return 1/n + harm(n-1);
    }
}

console.log(harm(3));