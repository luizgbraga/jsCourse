/*

Criar um objeto literal é análogo a escrever 'const obj = new Object(...).
Por isso, objetos literais, por padrão, herdam os métodos da função construtora Objetos.
Isto é,

objLiteral.__proto__ === Object.prototype

Por isso, existe uma função que altera o Protótipo de um objeto. É ela:

Object.setPrototypeOf(recebeProtótipo, mandaProtótipo);

*/

const objetoA = {
    chaveA: 'A'
    // __proto__: Object.prototype
}

const objetoB = {
    chaveB: 'B'
    // __proto__: objetoA
}

Object.setPrototypeOf(objetoB, objetoA);

console.log(objetoB.chaveA)
    
/*

Outra: não é recomendável usar __proto__ para acessar o Protótipo de um objeto.
Para isso, exsite uma função:

Object.getPrototypeOf(objeto);

*/

Object.getPrototypeOf(objetoA)

console.log(objetoA.__proto__ === Object.getPrototypeOf(objetoA));
