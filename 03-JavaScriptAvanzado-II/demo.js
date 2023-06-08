// function sumTwoSmallestNumbers(numbers) {
//     var newarrar = numbers.sort((a, b) => a - b);// ordenamiento ascendente.
//     var suma = newarrar[0] + newarrar[1];
//     return suma;
// }
// console.log(sumTwoSmallestNumbers([54, 23, 5, 23]))
// function persistence(num) {
//     console.log(num);
//     let respuesta = 0;
//     let numero = String(num).split('').map(Number);
//     console.log(numero)
//     for (; numero.length > 1;) {
//         numero = numero.reduce((acumulador, numero) => acumulador * numero);
//         numero = Array.from(String(numero), Number);
//         respuesta++
//     }
//     return respuesta;
// }
// console.log(persistence(39));
//CLASE 05 DE JUNIO

function saludar(saludo) {
    return function (nombre) {
        console.log(saludo + ' ' + nombre);
    }
}
var saludarhola = saludar('hola');
var saludarhi = saludar('hi');
saludarhola('romario');
saludarhola('yesica');
saludarhi('sorela');

// BIND apply call
let persona = {
    nombre: 'alex',
    apellido: 'bris'
}
let lognombre = function () {
    console.log(this.nombre)
}
//call
// lognombre.call(persona)
//bind
let lognombrepersona = lognombre.bind(persona);
lognombrepersona()
//apply---> sirve para poder añadir argumentos
// let persona = {
//     nombre: 'alex',
//     apellido: 'bris'
// }
// let lognombre = function (arg1, arg2) {
//     console.log(arg1 + this.nombre + arg2);
// }
// lognombre.apply(persona, ["Hola ", " como ests"])


