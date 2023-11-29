/* .indexOf  obtenemos el primer index de un elemento.
 si no hay elemento no retorna -1.
*/
const nombres = ['brian','loki','thor','holck','batman','robin','spiderman','venon','thor'];
console.log(nombres.indexOf('thor'));

// .lastIndexOf()  obtenemos el ultimo index de un elemento.
console.log(nombres.lastIndexOf('thor'));

// .forEach()  nos permite ejecutar una funcion por cada elemento.
nombres.forEach((nombre) => {
console.log(`hola ${nombre}`);
});