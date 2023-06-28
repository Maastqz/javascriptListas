console.log(`Trabalhandos com listas`);
// const salvador = `Salvador`;
// const saoPaulo = `São Paulo`;  //ctrl k c atalho para comentar partes selecionadas
// const rioDeJaneiro = `Rio de Janeiro`;

const listaDeDestinos = new Array(
    `Salvador`,
    `São Paulo`,
    `Rio de Janeiro`  
);

listaDeDestinos.push(`Curitiba`); //push vai adicionar um item na lista
console.log("Destinos Possíveis:");
//console.log(salvador, saoPaulo, rioDeJaneiro);
console.log(listaDeDestinos);

listaDeDestinos.splice(1,1); //na lista sempre começa com 0, por isso sao paulo fica na posição 1                                              
console.log(listaDeDestinos);

console.log(listaDeDestinos[1], listaDeDestinos[0]);