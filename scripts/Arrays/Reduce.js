/*

Reduce difere um pouco das anteriores.
O método Reduce REDUZ a array a UM ÚNICO valor.

Para isso, a função callback do método Reduce recebe como parâmetros: ACUMULADOR, valor, índice, array.
Além disso, atribuímos um valor inicial para o acumulador.
A partir daí, alteramos o acumulador com os elementos da array e retornamos o acumulador final.

*/

const numeros = [1, 2, 3, 4, 5, 6];

let soma = numeros.reduce(function(acumulador, valor, indice, array) {
    acumulador += valor;
    return acumulador;
}, 0); // o 0 é o valor incial do acumulador

console.log(soma);

let produto = numeros.reduce(function(acumulador, valor) {
    acumulador *= valor;
    return acumulador;
}, 1); // o 1 é o valor incial do acumulador

console.log(produto);

// Na real, o Reduce pode substituir tanto o Filter quanto o Map:

// Filter

let numerosPares = numeros.reduce(function(acumulador, valor) {
    if(valor % 2 === 0) {
        acumulador.push(valor);
    }

    return acumulador;
}, []);

console.log(numerosPares);

// Map

let numerosDobrados = numeros.reduce(function(acumulador, valor) {
    acumulador.push(valor * 2);
    return acumulador;
}, []);

console.log(numerosDobrados);