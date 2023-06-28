console.log(`Trabalhandos com condicionais`);
const listaDeDestinos = new Array(
    `Salvador`,
    `São Paulo`,
    `Rio de Janeiro`  
);

const idadeComprador = 16;
const estaAcompanhada = true


console.log("Destinos Possíveis:");
console.log(listaDeDestinos);

if(idadeComprador >= 18){
    console.log("Comprador maior de idade");
    listaDeDestinos.splice(1,1); //na lista sempre começa com 0, por isso sao paulo fica na posição 1 //removendo item
}else{
    //a pessoa é menor de idade
    if(estaAcompanhada){
        console.log("Comprador esta acompanhado");
        listaDeDestinos.splice(1,1);
    }else{
        console.log("Não é maior de idade e não posso vender");
    }
}



console.log(listaDeDestinos);

// console.log(idadeComprador > 18);
// console.log(idadeComprador < 18);
// console.log(idadeComprador <= 18);
// console.log(idadeComprador >= 18);
// console.log(idadeComprador == 18);