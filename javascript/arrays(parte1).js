// Arrays (Parte I)

// Como criar um array

let arr = ['a', 1, 1.2, true];

console.log(typeof arr);

// // Como acessar um array

console.log('1º elemento:',arr[0]);
console.log('3º elemento:',arr[2]);
console.log('4º elemento:',arr[3]);

// // Como obter o tamanho do array

console.log('Tamanho do array: ', arr.length)

// Percorrendo arrays

for(let i=0; i<arr.length; i++){
    console.log(arr[i])
}

for(let elemento of arr){
    console.log(elemento)
}

for(let indice in arr){
    console.log(indice, arr[indice])
}