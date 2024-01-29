/*local scope o variables locales.
- son la variables declaradas dentro de una funcion.
- solo podemos acceder a ellas desde dentro de una funcion.
*/

var numDeLetras = (nombre) => {
var numero = nombre.length;
console.log(`${nombre} tiene ${numero} letras`);
};

numDeLetras('messi');