/*

Já nesse arquivo, o Callback é empregado função a função, separadamente.
A função Callback é, basicamente, uma função que chama a próxima.

*/

function random(min = 1000, max = 3000) {
    return Math.round(Math.random() * (max - min) + min);
} 


function fA(callback) {
    setTimeout(function() {
        console.log('fA executada!');
        if(callback) callback();
    }, random());
}

function fB(callback) {
    setTimeout(function() {
        console.log('fB executada!');
        if(callback) callback();
    }, random());
}

function fC(callback) {
    setTimeout(function() {
        console.log('fC executada!');
        if(callback) callback();
    })
}

fA(callbackA);

function callbackA() {
    fB(callbackB);
}

function callbackB() {
    fC(callbackC);
}

function callbackC() {
    console.log('Haaa!');
}
