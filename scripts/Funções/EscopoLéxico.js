const nome = 'Luiz';

function falaNome() {
    console.log(nome);
}

falaNome(); // Luiz

// ****************************

const outroNome = 'Fernando';

function falaOutroNome() {
    const outroNome = 'Otávio';
    console.log(outroNome);
}

falaOutroNome(); // Otávio

// ****************************

const num = 3;

function falaNumero() {
    const num = 5;
    console.log(num);
}

function chamaFalaNumero() {
    falaNumero();
}

chamaFalaNumero(); // 5

// ****************************

const outroNum = 10;

function falaOutroNumero() {
    console.log(outroNum);
}

function chamaFalaOutroNumero() {
    const outroNum = 11;
    falaOutroNumero();
}

chamaFalaOutroNumero(); // 10