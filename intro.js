// intro.js

// Tipos de datos
console.log("=== Data Types ===");
console.log(typeof "Hola Rodrigo"); // string
console.log(typeof 42);              // number
console.log(typeof true);            // boolean
console.log(typeof null);            // object (curiosidad de JS)
console.log(typeof undefined);       // undefined

// Operadores aritméticos
console.log("\n=== Arithmetic Operators ===");
console.log("5 + 3 =", 5 + 3);
console.log("10 % 3 =", 10 % 3);
console.log("2 ** 3 =", 2 ** 3);

// Concatenación de strings
console.log("\n=== String Concatenation ===");
const nombre = "Rodrigo";
console.log("Hola " + nombre);
console.log(`Hola, ${nombre}!`);

// Propiedades y métodos
console.log("\n=== Properties & Methods ===");
const saludo = "hola";
console.log("Length:", saludo.length);
console.log("Uppercase:", saludo.toUpperCase());

// Objetos nativos
console.log("\n=== Built-in Objects ===");
console.log("Random number 0-9:", Math.floor(Math.random() * 10));
console.log("Current year:", new Date().getFullYear());


/* tipos de datos  */
 console.log('tipos de datos')
 console.log(typeof "hola mi nombre es rodrigo") /* estring */
 console.log(typeof 46) /* humber */
 console.log(typeof true) /* boolean */
 console.log(typeof null) /* null valor de js */
 console.log(typeof undefined) /* undefined */

 /* operadores arimeticos*/
 console.log("operadores arimeticos")
 console.log("1+1", 1+1)
 console.log("2-2" , 2-2)
 console.log("10%3", 10%3)
 console.log("2/4", 2/4)
 console.log("10*8" , 10*8)
 console.log("20**9", 20**9)

 /* concatenacion de string */

 console.log("concatenacion de strings")
 let name = "Jose"
 console.log("yo me llamo" + name)
 console.log(`hola mi nombre es ${name}`)

 /* porpiedades y metodos */
 console.log("propiedades y metodos")
 let pais = "colombia";
 console.log("length property", pais.length)
 console.log("toUppercase method:", pais.toUpperCase())

/* objetos nativos */

console.log("built in-objects")
console.log("random number", Math.floor(Math.random()*10))
console.log("current date", new Date().getFullYear())