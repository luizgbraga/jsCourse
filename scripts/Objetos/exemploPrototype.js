function Produto(nome, preco, estoque, fabrica) {
    this.nome = nome;
    this.preco = preco;
    this.estoque = estoque;
    this.fabrica = fabrica;
};

Produto.prototype.desconto = function(desconto) {
    this.preco *= ((100 - desconto)/100);
};

Produto.prototype.lucro = function() {
    return this.estoque * (this.preco - this.fabrica);
}

const camisetas = new Produto('camiseta', 50, 45, 10);

console.log(camisetas.preco);

camisetas.desconto(20);
console.log(camisetas.preco);
console.log(camisetas.lucro());

let livro = {
    nome: 'Crime e Castigo',
    preco: 100,
    estoque: 8,
    fabrica: 50,
}

Object.setPrototypeOf(livro, Produto.prototype);

console.log(livro.lucro());