/*

Funções de CallBack são um modo de ordenar a execução de funções.
Muitas vezes, na Web, queremos que seja executada a função A, depois B, depois C.
Entretanto, caso a A demore 3s para ser executada, a B demore 1s e a C demore 2s, o output será B C A.
Na web, precisamos fazer coisas que não temos controle do tempo que vai demorar na execução.

Para simular isso, faremos três funções que só serão executadas após um tempo aleatório.
Veja:

*/

function random(min = 1000, max = 3000) {
    return Math.round(Math.random() * (max - min) + min);
} 

function f1() {
    setTimeout(function() {
        console.log('f1 executada!');
    }, random());
}
function f2() {
    setTimeout(function() {
        console.log('f2 executada!');
    }, random());
}

function f3() {
    setTimeout(function() {
        console.log('f3 executada!');
    }, random());
}

f1();
f2();
f3();
console.log('Sou executado primeiro!');