/*

JavaScript é baseado em protótipos para passar propriedades e métodos de um objeto a outro.

Protótipos são o mecanismo pelo qual objetos herdam recursos um dos outros.

JavaScript é uma linguagem baseada em protótipos.
Para fornecer herança, os objetos têm, dentro deles, um objeto Prototype, do qual herda propriedades.
Tal objeto Prototype, por sua vez, também pode ter um objeto Prototype, to qual também herda propriedades, que são herdadas pelo outro acima.

Assim, forma-se uma CADEIA de protótipos, e justifica alguns objetos empregarem métodos que não foram declarados nestes.


*/

function Pessoa(nome, sobrenome, idade, sexo, interesses) {
    this.nome = nome;
    this.sobrenome = sobrenome;
    this.idade = idade;
    this.sexo = sexo;
    this.interesses = interesses;
}

const person = new Pessoa('Luiz', 'Braga', 19, 'masculino', ['Literatura', 'Basquete']);

/*

Se digitarmos no console 'person.' e deixarmos o navegador concluir automaticamente, aparecerão opções como:

person.nome
person.idade
person.sexo
person.interesses
person.toString()
person.valueOf()...

Perceba que aparece o que foi definido na Constructor Function Pessoa, mas, além disso, aparecem OUTROS, não definidos por nós.
Todos esses outros são HERDADOS de protótipo de Pessoa, que é Object.

O que acontece quando chamamos person.valueOf()?
O navegador verifica, inicialmente, se o objeto person tem um método valueOf() definido no seu construtor, Pessoa.
Se não tem, o navegador verifica se o protótipo de Person, que é Object, tem esse método.
Assim por diante, descendo a cadeia de protótipos.

*/

console.log(Pessoa.prototype);
console.log(Date.prototype);

/*

Prototype é um objeto que já está automaticamente atrelado à função construtora.
Quando criamos um objeto a partir de uma função construtora, esse objeto possui como propriedade outro objeto, chamado Prototype.

*/

Pessoa.prototype.fala = 'Oi!';

Pessoa.prototype.nomeCompleto = function() {
    return this.nome + ' ' + this.sobrenome;
}

console.log(person.fala);
console.log(person.nomeCompleto());

/*

Perceba que podemos criar métodos e propriedades dentro do Prototype da função construtora, de forma que eles ficam acessíveis aos objetos criados.
É importante notar que Prototype é um objeto da Constructor Function.
__proto__ é esse mesmo objeto, mas do objeto construído. Note:

*/

console.log(Pessoa.prototype === person.__proto__);

const otherPerson = new Pessoa('Fernando', 'Braga', 14, 'masculino', ['PS4', 'Futebol']);

console.log(otherPerson.nomeCompleto()); // funciona!

// e se eu criar um objeto sem a função construtora?

const aluno = {
    nome: 'Braga',
    matricula: 21414
}

Object.prototype.dados = function() {
    return `Meu nome é ${this.nome}, matrícula ${this.matricula}`;
}

console.log(aluno.dados());
console.log(aluno.__proto__);

let humano = new Object( // função construtora!
    {
        idade: 19,
        sexo: 'masculino'
    }
);

console.log(humano);
console.log(humano.dados());

