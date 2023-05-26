// Arrays (parte II) - Métodos de array

let arr1 = [30, 12, 25, 34, 82];
let arr2 = [];

// Fatiamento - Slice

console.log(arr1.slice(0, 2));
console.log(arr1.slice(2));
console.log(arr1.slice(1 | 2));

console.clear();

// Adicionando elementos: push | unshift

console.log(arr2);

arr2.push(5);
arr2.unshift(15,3);
console.log(arr2);

console.clear();

// Removendo elementos: pop | shift

console.log(arr2);

arr2.pop();
console.log(arr2);

arr2.shift();
console.log(arr2);

console.clear();

// Concatenando arrays: concat

console.log(arr1);
console.log(arr2);

console.log(arr1.concat(arr2));

console.clear();

// Buscando elementos: indexOF | lastIndexOf

console.log(arr1);

let indiceElemento34 = arr1.indexOf(34);

console.log(indiceElemento34);

let arr3 = [1,2,3,3,4,5,3];

console.log(arr3.lastIndexOf(3));

console.clear();

// Descobrindo a existência de um elemento: includes

console.log(arr1);

console.log(arr1.includes(30));

console.clear();

// Invertendo um array: reverse

console.log(arr1)

const arr1Invert = arr1.reverse()

console.log(arr1Invert)