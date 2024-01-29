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

// .shift()  Elimina el primer elemento de un arreglo y recorre los elementos.
const dias = ['lunes','martes','miercoles','jueves','viernes','sabado','domingo'];
console.log(dias);
dias.shift();
console.log(dias);

// .unshift()  agrega un elemento al inicio de un arreglo y empuja los elementos.
dias.unshift('lunes');
console.log(dias);

/* .splice() nos permite insertar elementos a un arreglo donde le especifiquemos. 
- 1er parametro - posicion donde queremos comenzar a insertar los elementos.
- 2do parametro - si queremos eliminar elementos del arreglo desde la posicion indicada.
- resto de parametros - los elementos a insertar.
*/
const amigos = ['oliver','benjin','tony','stick','goku','luffy','zoro'];
console.log(amigos);
amigos.splice(2, 2, 'seiya', 'seryu');
console.log(amigos);

/* .slice()  nos permite copiar una parte de un arreglo a otro.
- 1er parametro - posicion desde donde queremos copiar.
- 2do parametro - hasta antes que, de elemento copiar.
*/
const frutas = ['pera','manzana','mango','zapote','uvas','naranjas','mandarinas','banano'];
console.log(frutas);
const fFavoritas = frutas.slice(1, 6);
console.log(fFavoritas);