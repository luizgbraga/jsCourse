/*

Filter é um método empregado para FILTRAR elementos de uma array.
Quando escrevemos array.filter(), isso é uma outra array, mas somente com alguns elementos da array.
Ou seja, o método filter seleciona alguns elementos com base em alguma condição definida.
Esses elementos filtrados são colocados em OUTRA array.

Filter retorna uma array com quantidade de elementos menor ou igual à original.

*/

const numeros = [1, 5, 12, 3, 70, 23, 8, 10, 88];

// método raiz

let numerosFiltrados = [];

for(let termo of numeros) {
    if(termo > 10) {
        numerosFiltrados.push(termo);
    }
}

console.log(numerosFiltrados);

// empregando o método array.filter


/*

A condição, o filtro imposto para a array deve ser uma função que retorna TRUE ou FALSE.
Se true, o termo é incluido na array filtrada, se false, não

A função, por padrão, recebe como parâmetro, nessa ordem: valor, índice e array.


*/

function FilterCallback(valor, indice, array) {
    return valor > 10; // true ou false
}

let numerosFilter = numeros.filter(FilterCallback);

console.log(numerosFilter);

// empregando o método array.filter com função anônima

let numerosFilterAn = numeros.filter(function(valor) {
    return valor > 10;
});

console.log(numerosFilterAn);

// empregando o método array.filter com arrow function

let numerosFilterArr = numeros.filter(valor => valor > 10);
console.log(numerosFilterArr);

let nums = [1, 45, 20, 12, 9, 10, 5, 18];

// filtra a array para valores maiores que 10 de íncides pares
let numsFilter = nums.filter((valor, indice) => valor > 10 && indice % 2 === 0);
console.log(numsFilter);

