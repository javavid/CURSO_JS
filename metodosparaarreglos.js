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