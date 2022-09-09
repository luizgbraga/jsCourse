/*

uma variável é um container para um valor.
em JS, há 3 modos de declarar uma variável:
 - let
 - var
 - const
as razões são históricas => var foi criada antes, mas tem falhas. 
let é (quase) sempre a melhor opção

LET
let declara uma variável no escopo do bloco atual, inicializando-a opcionalmente com um valor.

VAR
var declara uma variável no escopo global ou de uma função, inicializando-a opcionalmente com um valor. 
sujeita e Hoisting.

Hoisting: é a leitura e processamento das variáveis antes de qualquer outra coisa no código. 
possibilita comportamentos estranhos, como a aceitação de:

nome = 'Braga';
var nome;

é possível, ainda, redeclarar:

var nome = 'Braga';
var nome = 'Amadi';

CONST
const declara uma variável no escopo do bloco atual, inicizalizando-a OBRIGATORIAMENTE com um valor.
esse valor será fixo, mas não imutável. 
é fixo no sentido que seu tipo não pode ser alterado.

*/

let nome = 'Luiz';
console.log("Meu nome é", nome);

const sobrenome = "Braga";
console.log("Meu nome é", nome, sobrenome);

nome = 'Fernando';
console.info("Meu nome agora é", nome, sobrenome);

idade = 19;
var idade;

console.warn(`Tenho ${idade} anos`);