// 1. Copiando objetos: Object.assign(target, source);

/*

Objetos não são tipos de dados primitivos.
Isso implica que o comportamento a seguir é esperado, ao tentar copiar um objeto:

let a  = 3;

let b = a;

b = 4;

console.log(a, b); // 4, 4

Para evitar isso e somente copiar, usamos o spread.

*/

let produto = {
    nome: 'caneco',
    preco: 42.50
}

let mesmoProduto = {
    ...produto
}

mesmoProduto.nome = 'marmita';
console.log(mesmoProduto, produto);

// ou podemos usar Object.assign()
// essa função recebe target e source como parâmetro: para onde queremos copiar e de onde vamos copiar

let outroProduto = Object.assign({}, produto);

outroProduto.nome = 'tampa da marmita';
console.log(outroProduto, produto);

// 2. Chaves do objeto: Object.keys(obj);

console.log(Object.keys(produto));

// 3. Proteger o objeto: Object.freeze(obj);

Object.freeze(produto);

produto.nome = 'mudei?';
console.log(produto);

// 4. Definir propriedades: Object.defineProperty(...); 

Object.defineProperty(mesmoProduto, 'material', {
        enumerable: true,
        value: 'aço',
        writable: false,
        configurable: false,
})

console.log(mesmoProduto);

// 5. Ver as características de uma propriedade: Object.getOwnPropertyDescriptor(obj, chave);

// mostra as características da chave passadas no parâmetro

console.log(Object.getOwnPropertyDescriptor(mesmoProduto, 'material'));

// 6. Values do objeto: Object.values(obj);

console.log(Object.values(produto));

// 7. Chaves E Values: Object.entries(obj);

console.log(Object.entries(produto));

/*

obs.:

chaves = Object.keys(obj);
values = Object.values(obj);
ambos = Object.entries(obj);

*/