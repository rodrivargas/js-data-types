/* Haz un generador de perfil básico que muestre en consola:

Tu nombre completo y edad.

Cuántas letras tiene tu apellido.

El año en que naciste (usando tu edad y new Date().getFullYear()).

Un número aleatorio del 1 al 50 que represente tu “número de la suerte”.

Una frase final con template literal:
"Hola, soy [nombre], tengo [edad] años, nací en [año] y mi número de la suerte es [número]". */

console.log("---- GENERADOR DE PERFIL BASICO ----");
let primerNombre =  "Jose";
let segNombre = "Rodrigo";
let primerApellido = "vargas";
let segundoApellido = "Suarez";
let edad = 46;
let nacimiento = "28 de septiembre de " + new Date("september 28, 78").getFullYear()
let luckyNumber = Math.floor(Math.random()*50)
let perfilBasico = `Hola, mi nombre es ${primerNombre} ${segNombre} mi apellido  es ${primerApellido} ${segundoApellido} , 
tengo ${edad} años, nací el ${nacimiento} y mi número de la suerte es ${luckyNumber}`

console.log(primerNombre)
console.log(segNombre)
console.log(primerApellido)
console.log(segundoApellido)
console.log(edad)
console.log(nacimiento)
console.log(luckyNumber)
console.log(perfilBasico)




