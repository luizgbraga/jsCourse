/*

Getters e Setters fazem métodos (funções) do objeto se comportarem como propriedades.

Getters e Setters são empregados com validações ou tratamento de dados.

Getters RETORNAM valores.
Setters ATRIBUEM valores.

*/

function Aluno(nome, idade, matricula, militar) {

    let matriculaPrivada = matricula;

    Object.defineProperties(this, {
        nome: {
            enumerable: true,
            value: nome,
            writable: true,
            configurable: false
        },

        idade: {
            enumerable: true,
            value: idade,
            writable: true,
            configurable: true
        },

        matricula: {
            enumerable: true,
            configurable: true,

            get: function() {
                return matriculaPrivada;
            },

            set: function(valor) {
                if(typeof valor !== 'number') {
                    console.log('Não é um número');
                }

                else {
                    matriculaPrivada = valor;
                }
            }
        },

        militar: {
            enumerable: true,
            value: militar,
            writable: true,
            configurable: false
        }
    })
}

const aluno = new Aluno('Braga', 19, 21414, false);

console.log(aluno);
console.log(aluno.matricula);

aluno.matricula = 21001;
console.log(aluno.matricula);