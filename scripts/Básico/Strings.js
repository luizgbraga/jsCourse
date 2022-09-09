//              012345
let myString = 'Essa é minha string'; // declaração e inicialização
let outraString = ' e essa é outra';

console.log(myString); // imprimir a string
console.log(myString[1]); // imprimir uma letra da string
console.log(myString[50]); // undefined, pois não está definido

console.log(myString + outraString); // concatenação


/*

em geral, as manipulações de strings são na forma:
nomeDaString.operação();

*/

console.log(myString.length); // retorna o tamanho da string

console.log(myString.charAt(1)); // retorna o caractere na posição 1

console.log(myString.indexOf('s')); // retorna, a partir do começo da string, a primeira aparência do 's'
console.log(myString.indexOf('minha')); // retorna, a partir do começo da string, a primeira aparência do 'minha'

console.log(myString.indexOf('m', 10)); // retorna a primeira aparência do 'm' depois do 10
console.log(myString.lastIndexOf('m', 10)); // retorna a primeira aparência do 'm' antes do 10

console.log(myString.lastIndexOf('a')); // retorna, a partir do final da string, a primeira aparência do 'a'

console.log(myString.concat(outraString)); // concatena
console.log(myString.concat(' e, digo mais, ' + 'dá pra concatenar mais!')); // concatena mais

console.log(`Dá pra concatenar ${myString} assim`);

console.log(myString.replace('string', 'expressão')); // trocar uma palavra por outra

console.log(myString.slice(5)); // retorna a string cortada a partir do 5
console.log(myString.slice(5, 9)); // retorna a string do 5 ao 9 não incluso

console.log(myString.toUpperCase()); // deixa tudo em letra maiúscula
console.log(myString.toLowerCase()); // deixa tudo em letra minúscula

