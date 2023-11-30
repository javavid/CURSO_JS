/* .indexOf  obtenemos el primer index de un elemento.
 si no hay elemento no retorna -1.
*/
const nombres = ['brian','loki','thor','holck','batman','robin','spiderman','venon','thor'];
console.log(nombres.indexOf('thor'));// si el nombre esta repetido en el arreglo 
                                     // tomara el que este de primera y nos mostrara la posiscion de este.

// .lastIndexOf()  obtenemos el ultimo index de un elemento.
console.log(nombres.lastIndexOf('thor'));//si el nombre esta repetido en el arreglo
                                         //tomara el que este de ultimo y nos mostrara la posiscion de este.

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

// .map()  nos permite ejecutar una funcion por cada elemento y crear un nuevo arreglo
// en base a los resultados de esa funcion.
const nomMayusculas = nombres.map((nbr) => {
return nbr.toUpperCase();// toUpperCase() metodo de string.
});
console.log(nomMayusculas);

// .filter()  nos permite ejecutar una funcion por cada elemento 
// y luego crea un arreglo en base a los resultados de esa funcion.
const namefourletras = nombres.filter((Nombre) => {
    if (Nombre.length === 4){
        return Nombre// me devuelve los nombre de 4 letras.
    }
});
console.log(namefourletras);

// .includes()  nos permite saber si el arreglo contiene un elemento especificado.
console.log(nombres.includes('loki'));// especifico si loki esta en el arreglo nombres[];.

// .every()  nos permite ejecutar una condicion sobre cada elemento y
// nos devuelve true si todos los elementos cumplieron la condicion.
const nomvalidos = nombres.every((names) => {
if(typeof names === 'string'){
return true;
}else{
    return false;
}
});
console.log('¿Son validos todos los elementos? ' + nomvalidos);