// Constructor Functions ou funções construtoras também retorna objetos.

function Pessoa(nome, sobrenome) {
    this.nome = nome;
    this.sobrenome = sobrenome;
}

const pessoa1 = new Pessoa('Luiz', 'Braga');
console.log(pessoa1.nome);

/*

Funções construtoras são MUITO similares às Factory Functions, mas com alguns detalhes:

- todas suas propriedades de chave devem ser precedidas por this.chave
- para criar um novo objeto usando a função, devemos colocar new...

*/