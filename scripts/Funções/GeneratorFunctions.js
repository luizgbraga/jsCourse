/*

Funções Geradoras são funções que 'retornam' mais de um valor.

Chamar a função geradora não executa seu conteúdo imediatamente.
Em vez disso, um objeto iterador é retornado.
Quando o método next() do objeto iterador é chamado, o conteúdo da função geradora é executado até o primeiro yield.
O método next() retorna um objeto com duas propriedades: value, contendo o valor retornado, e done.
Done indica, com true ou false, se o gerador já produziu seu último valor.
Quando o gerador tiver terminado, a função retornará, ao ser chamada .next() o objeto:
{
    value: undefined,
    done: true
}

Um return acaba com a função.

Para acessar de fato o valor retornado pelo yield, então, usamos

const gen = geradora();

gen.next().value

*/

function* geradora() {
    yield 'Valor 1';
    yield 'Valor 2';
    yield 'Valor 3';
}

const gen = geradora();

console.log(gen.next());
console.log(gen.next());
console.log(gen.next());

console.log(gen.next());

function* even() {
    yield 0;
    yield 2;
    yield 4;
    yield 6;
    yield 8;
}

const evenNumbers = even();

console.log(evenNumbers.next().value);
console.log(evenNumbers.next().value);
console.log(evenNumbers.next().value);

function* multiplos(n) {
    let i = 1;
    while(true) {
        yield n * i;
        i++;
    }
}

const multiplos6 = multiplos(6);

console.log(multiplos6.next().value);
console.log(multiplos6.next().value);
console.log(multiplos6.next().value);
console.log(multiplos6.next().value);
console.log(multiplos6.next().value);
console.log(multiplos6.next().value);
console.log(multiplos6.next().value);
console.log(multiplos6.next().value);
console.log(multiplos6.next().value);
console.log(multiplos6.next().value);
console.log(multiplos6.next().value);
console.log(multiplos6.next().value);
console.log(multiplos6.next().value);
console.log(multiplos6.next().value);
console.log(multiplos6.next().value);
console.log(multiplos6.next().value);
console.log(multiplos6.next().value);
console.log(multiplos6.next().value);
console.log(multiplos6.next().value);
console.log(multiplos6.next().value);

