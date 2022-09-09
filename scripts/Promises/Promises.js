// Gera um número de segundos aleatório
function random() {
    return Math.floor((Math.random() * (3000 - 1000) + 1000))
}

/*

Uma promise é um objeto usado para processamento assíncrono.
A promise representa um proxy (intermediário) para um valor.

A promise tem 3 estados: pending, fullfilled e rejected.

*/

function hello(order, time) {
    let promise = new Promise((resolve, reject) => {
        setTimeout(function() {
            if(typeof(order) === 'string') {
                resolve(order);
            } else {
                reject('Error');
            }
        }, time);
    })

    return promise;
}

// .then() retorna outra promise.
// Como toda promise, recebe 2 funções como argumentos, mas suprimimos a última no .catch().

hello('1', random())
    .then(resposta => {
        console.log(resposta);
        return hello('2', random());
    })
    .then(resposta => {
        console.log(resposta);
        return hello(3, random());
    })
    .then(resposta => {
        console.log(resposta);
    })
    .then(() => {
        console.log('Acabou!');
    })
    .catch(e => {
        console.log('erro: ' + e);
    });

