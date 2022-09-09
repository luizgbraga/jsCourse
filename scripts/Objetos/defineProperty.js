/*

A função Object.defineProperty(), análoga a Object.freeze(), de certa forma altera as propriedades do objeto.
Object.defineProperty recebe como argumento o objeto do qual trataremos, a chave contida nesse objeto que trataremos, e do que trataremos.

'Do que trataremos' é um objeto com várias propriedades.

*/

function Produto(preco, estoque) {
    this.preco = preco;
    this.estoque = estoque;

    Object.defineProperty(this, 'estoque', {
        enumerable: false, // essa chave pode ser 'mostrada'?
        writable: false, // a propriedade pode ser alterada?
        configurable: false // a propriedade pode ser deletada ou redefinida?
    })
}

const produto = new Produto(25, 100);

console.log(Object.keys(produto));

// podemos ainda, criar uma Constructor Function completa, para detalhar cada chave

function Aluno(nome, idade, matricula, militar) {
    Object.defineProperties(this, {
        nome: {
            enumerable: true,
            value: nome,
            writable: true,
            configurable: false
        },

        idade: {
            enumerable: true,
            value: idade,
            writable: true,
            configurable: true
        },

        matricula: {
            enumerable: false,
            value: matricula,
            writable: false,
            configurable: false
        },

        militar: {
            enumerable: true,
            value: militar,
            writable: true,
            configurable: false
        }
    })
}

const aluno = new Aluno('Braga', 19, 21414, false);

console.log(aluno);
