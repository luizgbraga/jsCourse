// IIFE ou Immediate Invoked Function Expression

// funcões auto-invocadas

/*

para não poluir o navegador com suas funções, além de garantir que não haverá conflito entre suas funções
e variáveis com as do escopo global já existentes no padrão, é normal inserirmos o código inteiro em uma
função, como:
 
function qualquer() {
    ...
}

qualquer();

chamando-a imediatamente depois, para ser executada. 

evita-se essa redundância com as IIFE.

*/

(function() {
    console.log('Sou automático!')
})();