console.log("Trabalhando com atribuição de variáveis");
const primeiroNome = "Ricardo";
const sobrenome = "Bugan";

//colocar virgula pois a virgula da espaço. Ou colocar assim: console.log(nome + " " + sobrenome)
console.log(primeiroNome, sobrenome);
console.log(`Meu nome é ${primeiroNome} ${sobrenome}`);

let contador = 0; //let variavel que varia, ou seja, pode ser atualizada
contador = contador +1;

const nomeCompleto = primeiroNome + sobrenome; //const variavel que nao varia, ou seja, nao pode ser atualizada
console.log(nomeCompleto);

let idade = 26; //declarando variavel
idade = 26; //atribuindo valor
idade = idade+1;
console.log(idade);