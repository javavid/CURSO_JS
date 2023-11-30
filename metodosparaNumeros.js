// .toString()  convierte un numero a cadena de texto.
const numero = 10;
console.log(numero, typeof numero);

const texto = numero.toString();
console.log(texto, typeof texto);

// .toFixed()  permite obtener un numero con la cantidad de decimales especificado.
const num = 3.14159265358979323846;
console.log(num.toFixed(4));//se pone la cantidad de decimales que quiere mostrar despues del punto.


/*parseInt() es una funcion, intenta transformar un valor a un entero.
 no se puede trabajar con decimales.
const nume1 = parseInt(prompt('escribe nume1'));
const nume2 = parseInt(prompt('escribe nume2'));
console.log(nume1 + nume2); 
*/

/* parseFloat() intenta transformar un valor a un numero con decimales.
const nume1 = parseFloat(prompt('escribe nume1'));
const nume2 = parseFloat(prompt('escribe nume2'));
console.log(nume1 + nume2); 
*/


// Math.random()  genera un numero al azar enetre 0 y 1.
const N = Math.random();
console.log(N);

// Math.floor()  redondea hacia abajo un numero.
console.log(Math.floor(10.5));
console.log(Math.floor(10.999));


// Math.ceil()  redondea hacia arriba un numero.
console.log(Math.ceil(10.2));
console.log(Math.ceil(10.999));


// Math.round()  redondea hacia el entero mas cercano.
console.log(Math.round(10.2));
console.log(Math.round(10.999));


// Ejemplo de numeros al azar de l 0 al 100.
const Nr = Math.random();
console.log(Math.floor(Nr * 101));