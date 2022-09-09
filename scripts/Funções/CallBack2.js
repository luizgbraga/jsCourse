/*

Usando Callback, colocamos como parâmetro uma função (que só sera executada se existir).
Entretanto, nesse arquivo, temos uma má prática de programação, que é a árvore de Callbacks.

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

fA(function() {
    fB(function() {
        fC(function() {
            console.log('Haaa!');
        })
    })
})