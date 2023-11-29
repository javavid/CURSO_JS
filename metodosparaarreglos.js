const colores = ['rojo','verde','azul'];
// .length (propiedad) nos permite conocer la cantidad de elementos de un arreglo.
console.log(colores.length);


//.toString()  nos permite transformar un arreglo a una cadena de texto.
// por ejemplo para poder mostrarla en el navegador.
document.body.innerHTML = colores.toString();//esto sale en la pantalla del navegador.

// .join()  nos permite transformar un arreglo a una cadena de texto y separar cada elemento.
console.log(colores.join('_'));