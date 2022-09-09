/*

window é um objeto.
é um objeto DOM (Document Object Model).

*/

window.alert("Isso é um alerta!");
window.confirm("Isso é uma confirmação. Certo");
window.prompt("E isso é um prompt");

/*

também podemos assim, sem o window.:

alert("Isso é um alerta!");
confirm("Isso é uma confirmação. Certo");
prompt("E isso é um prompt");

*/

let confirmacao = confirm("OK é true, Cancelar é false");
alert("Sua resposta foi " + confirmacao);

// o prompt sempre recebe uma string como resposta. Veja:

let x = prompt("Insira um número: ");
let y = prompt("Insira outro número: ");

alert(`A soma é ${x + y}`);