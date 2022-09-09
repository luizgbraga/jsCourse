const array = [2, 4, 6, 8, 10, 12, 14];

array.forEach(function(valor, indice) {
    console.log(`O valor ${valor} tem índice ${indice}`);
})

/*

forEach não é nada mais que outra maneira de iterar sobre uma array.
Assim como for(let termo of array), ele percorre a array termo a termo.
É muito parecido com reduce, map e filter, mas NÃO retorna nada.

*/

array.forEach(valor => console.log(valor / 2));

let total = 0;
array.forEach(function(valor) {
    total +=valor;
})

console.log(total); // simulando um reduce