let array = [1, 2, 3, 4, 'saudações'];

console.log(array);
console.log(typeof array); // array é um objeto

console.log(array[1], array[4]);
console.log(typeof array[0], typeof array[4]);

let nomes = ['Luiz', 'Maria', 'João'];

console.log(nomes);

nomes[0] = 'Eduardo' // modificando um elemento da array -> Eduardo, Maria, João
nomes[3] = 'Yan' // adicionando um elemento na array -> Eduardo, Maria, João, Yan

console.log(nomes); 

nomes.push('Ricardo'); // adiciona ao fim da array -> Eduardo, Maria, João, Yan, Ricardo
console.log(nomes);

nomes.unshift('Pedro'); // adiciona ao início da array -> Pedro, Eduardo, Maria, João, Yan, Ricardo
console.log(nomes);

nomes.pop(); // remove o último elemento -> Pedro, Eduardo, Maria, João, Yan
console.log(nomes);

// ainda, podemos remover o último elemento e deixá-lo armazenado numa variável

const ultimo = nomes.pop(); // ultimo = 'Yan'
console.log(ultimo);

nomes.shift(); // remove o primeiro elemento -> Eduardo, Maria, João
console.log(nomes);

delete nomes[1]; // deleta...
console.log(nomes); // -> nomes[1] = empty item

console.log(nomes.length); // tamanho
console.log(nomes[nomes.length - 1]); // último item