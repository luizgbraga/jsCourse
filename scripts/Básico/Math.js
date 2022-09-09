let num = 15.78;

console.log(Math.ceil(num)); // função teto
console.log(Math.floor(num)); // função piso

console.log(Math.round(num)); // arredondamento

console.log(Math.max(1, 2, 3, 4)); // retorna o máximo
console.log(Math.min(1, 2, 3, 4)); //  retorna o mínima

let random = Math.random(); // retorna um número aleatório entre 0 e 1

let max = 100;
let min = 20;

let newRandom = random * (max - min) + min; // retorna um número aleatório entre min e max
let integerRandom = Math.round(newRandom); // retorna um inteiro aleatório entre min e max

console.log(newRandom);
console.log(integerRandom);

let pi = Math.PI;
console.log(pi);