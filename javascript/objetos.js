// Objetos

// Como criar um objeto no javascript?

let pessoa={
    nome:"José",
    idade: 25,
    peso: 80
};

console.log(pessoa.nome);
console.log(pessoa['nome']);

console.clear();
// Como adicionar um par chave-valor?

pessoa.altura = 1.77;

console.log(pessoa);

console.clear();

// Como remover um par chave-valor?

delete pessoa.altura;

console.log(pessoa);

console.clear();

// Como percorrer?

for(let chave in pessoa) {
    console.log(chave, pessoa[chave]);
}