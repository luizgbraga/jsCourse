const pessoa = {
    nome: 'Luiz',
    sobrenome: 'Braga',
    idade: 19
}

// formas de acessar o valor das chaves do objeto

console.log(pessoa.nome);

console.log(pessoa['sobrenome']);

const chave = "idade";
console.log(pessoa[chave]); // dinâmica

const aluno = new Object(); // outra forma de criar objetos
aluno.nota = 8;
aluno.nome = 'Braga';
aluno.falarNota = function() {
    return`${this.nome} tirou ${this.nota}`; // método: função dentro do objeto
}

console.log(aluno.falarNota());

// Factory Functions

function criaPessoa(nome, sobrenome) {
    return {
        nome: nome,
        sobrenome: sobrenome,
        get nomeCompleto() {
            return this.nome + ' ' + this.sobrenome;
        }
    }
}

const p1 = criaPessoa('Luiz', 'Braga');
console.log(p1.nomeCompleto);

// Constructor Functions

function Pessoa(nome, sobrenome) {
    this.nome = nome;
    this.sobrenome = sobrenome;
}

const p2 = new Pessoa('Kátia', 'Amadi');
console.log(p2.nome);