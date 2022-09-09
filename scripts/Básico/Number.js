let num1 = 12;
let num2 = 30;

let float = 3.1415;

/*

em geral, as manipulações de números são na forma:
nomeDoNumero.operação();

*/

console.log(num1.toString()); // retorna o número em string
console.log(num1.toString(2)); // retorna o número em binário

console.log(float.toFixed(3)); // retorna o número com casas decimais fixas

console.log(num1.toString() + num2.toString()); // concatena números

console.log(num1.toString().length);

// CONVERTER PARA NUMBER

let x = '10';
let y = '45';

console.log(x + y);
console.log(Number(x) + Number(y)); // Number(num) transforma num em um number
console.log(parseInt(x) + parseInt(y)); 

// obs.: Number.parseInt() e parseInt() são idênticos