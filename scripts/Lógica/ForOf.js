// o 'for of' funciona somente para tipos iteráveis: Arrays e Strings

/*

a lógica é a seguinte:
no 'for in', ele percorre a array ou objeto pegando seus índices, e não os termos nessses índices.
como foi visto, para pegarmos os termos de fato, usamos array[indice].

já no 'for of', esse trabalho é feito automaticamente.
ele percorre a array ou string já lendo os termos. Veja:

*/

let nomes = ['Ana', 'Guilherme', 'Enzo'];

for(let indice in nomes) {
    console.log(indice);
}

for(let termo of nomes) {
    console.log(termo);
}

let boasVindas = 'Oi, tudo bem?';

for(let termo of boasVindas) {
    console.log(termo);
}