//Estruturas Condicionais

const idade = 25;

if (idade >= 18){
    console.log('Maior de idade');
}else{
    console.log('Menor de idade');
}

// Se media>= 7, Aprovado
// Se media>=5, Recuperação
// Se media<5, Reprovado

console.clear(); //Limpando as saídas anteriores

media = 4;

if (media>= 7){
    console.log('Aprovado');
}else if(media>=5){
    console.log('Recuperação');
}else{
    console.log('Reprovado');
}

console.clear()

if (50 > 100) {
  console.log("Falta um tanto");
} else {
  if ("1" == "-1") {
    console.log("Quase lá");    
  }

  if (!null) {
    console.log("Sucesso");
  }
}