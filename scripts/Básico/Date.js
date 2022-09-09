const tempo1 = Date.now();

//

const data = new Date(); // data de agora!

console.log(data);
console.log(data.toString()); // data de agora no formato string

const dataZero = new Date(0); // 01/01/1970 -> timestamp zero

console.log(dataZero);

/*
const minuto = 60 * 1000;
const hora = 60 * minuto;
const dia = 24 * hora;
const ano = 365 * dia;
*/

const niver = new Date(2002, 0, 7, 2); // ano, mês, dia, hora, minutos, segundos, milissegundos
console.log(niver);

const dataString = new Date('2002-01-07 08:30:00');
console.log(dataString);

const dia = data.getDate(); console.log(dia);
const mes = data.getMonth();console.log(mes);
const hora = data.getHours(); console.log(hora);
const minutos = data.getMinutes(); console.log(minutos);
const segundos = data.getSeconds(); console.log(segundos);
const ano = data.getFullYear(); console.log(ano);
const milissegundos = data.getMilliseconds(); console.log(milissegundos);
const diaDaSemana = data.getDay(); console.log(diaDaSemana);

const dataEmMilisec = Date.now(); // milissegundos passados desde a timestamp zero

const tempo2 = Date.now();

console.log(`O código foi executado em ${tempo2 - tempo1} milissegundos`);