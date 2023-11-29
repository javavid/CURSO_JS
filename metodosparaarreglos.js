const colores = ['binotinto','cafe','azul'];
// .length (propiedad) nos permite conocer la cantidad de elementos de un arreglo.
console.log(colores.length);


//.toString()  nos permite transformar un arreglo a una cadena de texto.
// por ejemplo para poder mostrarla en el navegador.
document.body.innerHTML = colores.toString();//esto sale en la pantalla del navegador.

// .join()  nos permite transformar un arreglo a una cadena de texto y separar cada elemento.
console.log(colores.join('_'));

// .sort()  nos permite ordenar un arreglo de cadenas de texto, de forma alfabetica.
console.log(colores.sort());//este .sort() tambien ordena numeros.

// .reverse()  nos permite ordenar un arreglo de forma decendente.
console.log(colores.reverse());//este .reverse() tambien ordena numeros de forma decendente.

// .concat()  nos permite juntar dos arreglos en uno solo.
const letras = ['a','b','c'];
const numeros = [1,2,3];
console.log(letras.concat(numeros));

// .push()  nos permite agregar un elemento al final de un arreglo.
colores.push('dorado');
console.log(colores);

// .pop()  nos permite eliminar el ultimo elemento de un arreglo.
colores.pop();
console.log(colores);