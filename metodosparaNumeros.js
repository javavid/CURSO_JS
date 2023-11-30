// .toString()  convierte un numero a cadena de texto.
const numero = 10;
console.log(numero, typeof numero);

const texto = numero.toString();
console.log(texto, typeof texto);

// .toFixed()  permite obtener un numero con la cantidad de decimales especificado.
const num = 3.14159265358979323846;
console.log(num.toFixed(4));//se pone la cantidad de decimales que quiere mostrar despues del punto.


//parseInt() es una funcion, intenta transformar un valor a un entero.
// no se puede trabajar con decimales.
const nume1 = parseInt(prompt('escribe nume1'));
const nume2 = parseInt(prompt('escribe nume2'));
console.log(nume1 + nume2); 