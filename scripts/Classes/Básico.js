/*

Classes são Constructor Functions. 

*/

class Pessoa {
    constructor(nome, idade, peso, altura) {
        this.nome = nome;
        this.idade = idade;
        this.peso = peso;
        this.altura = altura;
    }

    fala() {
        console.log(`${this.nome} está falando.`);
    }

    imc() {
        return (this.peso / this.altura ** 2).toFixed(2);
    }
}

let person = new Pessoa('Braga', 19, 85, 1.86);

console.log(person.imc());

// é IGUAL a:

function Aluno(nome, numero) {
    this.nome = nome;
    this.numero = numero;
}

Aluno.prototype.fala = function() {
    console.log(`${this.nome} está falando.`);
}

let milico = new Aluno('Braga', 21414);

console.log(milico.nome);
milico.fala();
