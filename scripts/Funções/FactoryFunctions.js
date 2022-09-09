// Factory Functions ou funções fábrica são funções que retornam objetos.

// Métodos são funções dentro de objetos

/*

nas funções dentro de objetos (métodos), podemos empregar variáveis criadas nas chaves do próprio objeto.
por exemplo, se criamos uma função que cria objetos pessoas e pedimos o nome e o sobrenome.
podemos criar um método que retorna o sobrenome. 
se criássemos esse método fora desse objeto, usaríamos pessoa.nome + pessoa.sobrenome.
mas, como o método está dentro do objeto, usamos this.nome + this.sobrenome.

o THIS é uma forma de pegar termos dentro do prórpio objeto.

*/

/////////////////////////////

/*

podemos transformar uma função (método) em um atributo do objeto.
para isso, empregamos o getter: 
se chamássemos 

falar: function() {
    ...
}

teríamos que chamar pessoa.falar();

se chamarmos

get falar() {
    ...
}

basta chamar pessoa.falar;

*/

//////////////////////////

/*

podemos passar parâmetros para as funções do objeto (métodos) por meio do setter.
declaramos da forma

set qualquerCoisa(valor) {
    ...valor
}

e, fora do objeto,
pessoa.qualquerCoisa = valor;

*/


function criaPessoa(nome, sobrenome, altura, peso, quadril) {
    let pessoa = {
        nome: nome,
        sobrenome: sobrenome,
        altura: altura,
        peso: peso,
        quadril: quadril,

        set nomeCompleto(valor) {
            let arrayNome = valor.split(' ');
            this.nome = arrayNome.shift();
            this.sobrenome = arrayNome.pop();
        },

        fala: function(assunto = 'nada') {
            return `${this.nome} está falando sobre ${assunto}`;
        },

        imc: function() {
            let imc = this.peso / this.altura ** 2;
            return imc.toFixed(2);
        },

        get iac() {
            let iac = this.quadril / this.altura ** 1.5;
            return iac.toFixed(2);
        }
    }

    return pessoa;
}

const pessoa1 = criaPessoa('Luiz', 'Braga', 1.86, 75, 85);

console.log(pessoa1.fala());
console.log(pessoa1.imc()); // não usando getter
console.log(pessoa1.iac); // usando getter

pessoa1.iac = 4;
console.log(pessoa1.iac); // não altera o valor, somente com setter

pessoa1.nomeCompleto = 'Luiz Braga';
console.log(pessoa1.nome);
console.log(pessoa1.sobrenome);

const pessoa2 = criaPessoa(' ', ' ', 1.56, 70, 90);

console.log(pessoa1.imc());
console.log(pessoa1.iac);

pessoa2.nomeCompleto = 'Kátia Amadi';
console.log(pessoa2.nome);

