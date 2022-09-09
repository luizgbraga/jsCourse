/*

É possível 'proteger' informações de um objeto, tornando-as inalteráveis.
Para isso, usa-se a função Object.freeze(objeto).

Também é possível aplicar essa função no interior de uma Constructor Function, de forma a criar somente objetos protegidos.
Para isso, colocamos ao fim da função:

function Construtora(...) {
    this.
    ...

    Object.freeze(this);
}

*/

const pessoa = {
    nome: 'Braga',
    idade: 19,
    matricula: 21414
}

pessoa.nome = 'Fábio';
console.log(pessoa.nome); // Fábio

Object.freeze(pessoa); // proteção

pessoa.nome = 'Márcio';
console.log(pessoa.nome); // Fábio

// Constructor Functions

function Pessoa(nome, idade) {
    this.nome = nome;
    this.idade = idade;

    Object.freeze(this);
}

const p = new Pessoa('Sérgio', 'Braga');
console.log(p.nome); // Sérgio

p.nome = 'Fernando';
console.log(p.nome); // Sérgio