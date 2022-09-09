function mostraHora() {
    let data = new Date();

    let hora = data.getHours() < 10 ? `0${data.getHours()}` : `${data.getHours()}`;
    let minutos = data.getMinutes() < 10  ? `0${data.getMinutes()}` : `${data.getMinutes()}`;
    let segundos = data.getSeconds() < 10 ? `0${data.getSeconds()}` : `${data.getSeconds()}`;

    console.log(`${hora}:${minutos}:${segundos}`);
}

mostraHora();

const timer = setInterval(mostraHora, 1000);

setTimeout(function() {
    clearInterval(timer);
}, 10000);

/*

A função setInterval recebe o nome de uma função (sem os parênteses) e um intervalo de tempo, em milissegundos.
setInterval vai executar tal função indefinidamente, com um intervalo entre cada execução, dado nos argumentos.
Para passar um parâmetro para a função, basta usar uma função anônima:

const timer = setInterval(myFunc, 10000);

com parâmetros:

const timer = setInterval(function() {
    myFunct(15);
}, 10000);

Para parar a execução desse loop infinito, basta chamar uma outra função: clearInterval(timer).

A função setTimeout recebe o nome de uma função e um intervalo de tempo, em milissegundos.
setTimeout vai executar tal função SOMENTE APÓS passaado o intervalo de tempo.

ex.: setTimeout(function() {
    console.log('Finalmente!');
}, 5000);

A mensagem 'Finalmente' só aparecerá no console após 5 segundos.

*/