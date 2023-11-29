/*global scope o variables globales.
- son las variables declaradas fuera de una funcion.
- podemos acceder a ellas desde cualquier parte del codigo.
- podemos usar const, let y var.
*/

var nombre = 'putos';

const saludo = () => {
    console.log('Hola ' + nombre);
}
saludo();