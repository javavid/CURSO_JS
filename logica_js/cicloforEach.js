const amigos = ['lucas','pepe','fer','tato','llepeto'];
amigos.forEach((amigo, index) => {
    console.log(`El amigo ${index} es: ${amigo}`);
});


/*ciclo   for in 
Nos permite recorrer las propiedades de un objeto.
*/
const persona = {
nombre:'jhons',
edad: 21,
correo:'jhons@email.co',
};
for(i in persona){
console.log(persona[i]);
}


/* ciclo for of 
- nos permite recorrer los valores de un objeto iterable.
- podemos recorrer: Arreglos, cadenas de texto, mapas y listas de nodos, etc
*/
const etiquetas = document.head.children;
console.log(etiquetas);
/*for(f of etiquetas){  //opcion#1 
console.log(f);
}*/

 [...etiquetas].forEach((elemento) => { //opcion#2
console.log(elemento);
});
