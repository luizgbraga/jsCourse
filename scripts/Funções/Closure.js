/*

Uma função sempre tem acesso às suas variávreis vizinhas.
Isto é, uma função tem acesso a variáveis fora dela, em seu Closure.

*/

let numero = 2;
console.log(numero); // 2

function incremento() {
    numero++;
};

incremento();
console.log(numero); // 3

// Perceba que a função alterou o valor de uma variável externa a ela.
// Isso não ocorre em C, por exemplo, sem ponteiros.
