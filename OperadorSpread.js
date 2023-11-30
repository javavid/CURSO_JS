/* Operador spread 
PERMITE TOMAR LO ELEMENTOS DE UN ARREGLO U OBJETO Y EXPANDIRLOS EN OTRO SITIO.
*/

// ejemplo#1 con arreglo.
const frutas = ['manazana','pera','piña','melon'];
const comidaFavoritas = ['Hamburguesa','salchipapas','perroscalientes', ...frutas];
console.log(comidaFavoritas);


//Ejemplo#2 con un objeto.
const datosLogin = {
email: 'paco@gmeil.co',
password: 31538,
};

const usuario = {
nombre: 'paco',
apellido: 'peronni',
edad: 21,
...datosLogin
};
console.log(usuario);