/*

O método Map é muito similar ao Filter no quesito de passar função anônima, os parâmetros, etc.

Entretanto, o método Map retorna uma array com a MESM quantidade de elementos da original, mas MODIFICADOS.
É como se cada elemento, um a um, passasse por uma função que o modifica.

Como se fosse:

array = [t0, t1, t2...];
f(array) = [f(t0), f(t1), f(t2)...];

*/

let numeros = [1, 4, 7, 8, 12, 3, 24];

let numerosDobrados = numeros.map(valor => valor * 2); // com arrow
console.log(numerosDobrados);

let numInParDobrados = numeros.map(function(valor, indice) { // sem arrow
    if(indice  % 2 === 0) {
        return valor * 2;
    }

    else return valor;
})
console.log(numInParDobrados);