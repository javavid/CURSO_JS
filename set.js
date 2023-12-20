/*let conjunto = new Set(['pedro','ricardo','maria','pedro','ricardo','maria','pedro','ricardo','ricardo']);

// Agrgar

conjunto.add('lucia');
conjunto.delete('pedro');
console.log(conjunto);*/


let array = ['cama','armario','sillas','cama','mesa'];

function comprar(muebles){
console.log(muebles);
}

function comprarPorUnidad(muebles){
let unidad = new Set(muebles);
console.log(unidad);
}

comprarPorUnidad(array);