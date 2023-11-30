/* .indexOf  obtenemos el primer index de un elemento.
 si no hay elemento no retorna -1.
*/
const nombres = ['brian','loki','thor','holck','batman','robin','spiderman','venon','thor'];
console.log(nombres.indexOf('thor'));

// .lastIndexOf()  obtenemos el ultimo index de un elemento.
console.log(nombres.lastIndexOf('thor'));

// .forEach()  nos permite ejecutar una funcion por cada elemento.
nombres.forEach((nombre, index) => {
console.log(`hola ${nombre} en posicion (${index})`);
});

// .find()  nos permite recorrer un arreglo y devuelve el primer elemento que retornamos.
const nom = ['Faian','Lucas','Diego','Varto','Pedro','Robin','Peter','Solis','Herver'];
const resultado = nom.find((nomb) => {
if (nomb[0] === 'R'){
return nomb;
}
});

console.log(resultado);