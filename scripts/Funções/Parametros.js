function semArgumentos() {
    console.log('Essa função não tem argumentos, mas...')
    console.log(arguments);
    console.log(arguments[1]);
}

semArgumentos();
semArgumentos(1, 2, 3);
semArgumentos('Oi', 'Tudo bem', 'Como vai', 'Você');

function soma() {
    let soma = 0;

    for(let termo of arguments) {
        soma += termo;
    }

    return soma;
}

console.log(soma(1, 4, 7));

/*

Toda função, seja ela declarada com ou sem parâmetros, guarda um objeto de nome arguments.
Nesse objeto, são armazenados os argumentos passados para função.

Dentro da função, podemos acessar o objeto arguments, bem como seus termos.

*/

function soma(a = 4, b = 2) { // assim inicializamos um parâmetro com um valor padrão, caso ele não seja dado como argumento.
    return a + b;
}

console.log(soma(1, 2)); // 1 + 2 = 3
console.log(soma(3)); // 3 + (2) = 5
console.log(soma()); // (4) + (2) = 6