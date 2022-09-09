// o 'for in' functiona para Arrays e Objetos

// o 'for in', em Arrays, lê o índice de array

let frutas = ['Maçã', 'Uva', 'Banana', 'Mamão'];

for(let indice = 0; indice < frutas.length - 1; indice++) {
    console.log(indice);
    console.log(frutas[indice]);
}

for(let indice in frutas) {
    console.log(indice);
    console.log(frutas[indice]);
}

// o 'for in', em objetos, lê a chave do objeto

let pessoa = {
    nome: 'Luiz',
    idade: 19,
    isAtiva: false,
    numero: 21414
}

for(let chave in pessoa) {
    console.log(chave);
    console.log(pessoa[chave]);
}