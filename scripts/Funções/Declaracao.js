// forma usual de declarar uma função

function saudacao(nome) {
    console.log(`Olá, ${nome}, tudo bem?`);
}

saudacao('Braga');
saudacao('Luiz');

console.log(saudacao('Guilherme')); // undefined, pois a função não retorna nada (void)

// ou, da mesma forma, com return

function outraSaudacao(nome) {
    return `Olá, ${nome}, como vai?`;
}

console.log(outraSaudacao('Lucas'));

// functions são First Class Objects, isso significa que podem ser tratadas como dados.
// por isso, podemos atribuir uma variável à função.

// essa é outra forma de declará-las, chamada Function Expression

const Soma = function(x, y) { // a função torna-se a variável Soma
    console.log(x + y);
}

Soma(2, 3);

const Produto = function(x, y) {
    produto = x * y;
    return produto;
}

console.log(Produto(3, 4));

// função que executa funções:

function executa(funcao) {
    funcao();
} 

const Ola = function() {
    console.log('Olá!');
}

executa(Ola);

// outra forma, ainda: Arrow Functions (ECMA Script 2015)

const Arrow = (u, v) => {
    return u ** v;
} 

console.log(Arrow(2, 5));

const quadrado = n => n ** 2;

console.log(quadrado(2));

// funções dentro de objetos são métodos

const pessoa = {
    nome: 'Luiz',
    idade: 19,
    falar: function() {
        console.log("Eu sei falar!");
    }
}

pessoa.falar();