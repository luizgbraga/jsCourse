function random() {
    let min = 1000;
    let max = 3000;
    return Math.floor(Math.random() * (min - max) + min);
}

function sayHi(name, time) {
    return new Promise((resolve, reject) => {
        setInterval(function() {
            resolve('Olá, ' + name);
        }, time);
    })
}

/*

sayHi('Luiz', random())
    .then(answer => {
        console.log(answer);
        return sayHi('Guilherme', random())
    })
    .then(nextAnswer => {
        console.log(nextAnswer);
        return sayHi('Amadi', random())
    })
    .then(lastAnswer => {
        console.log(lastAnswer);
    })
    .cacth()

*/

async function executa() {
    const primeiro = await sayHi('First', random);
    console.log(primeiro);
    const segundo = await sayHi('Second', random);
    console.log(segundo);
    const terceiro = await sayHi('Third', random);
    console.log(terceiro);
}

executa();