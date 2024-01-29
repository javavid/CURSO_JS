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


/* parametro Rest
- permite que una funcion contenga un numero indefinido de argumentos.
- los argumentos extras que encuentre los convertira en un arreglo.
*/
const resgistroUsuario = (nombre, correo, ...datosAdicionales) => {
console.log(nombre, correo , datosAdicionales);
};
resgistroUsuario('jesus', 'jesus@email.es');
resgistroUsuario('ford', 'ford@email.es', 21, 'peru');


/* Destructuracion de objetos
- Nos permite obtener elementos o propiedades de un arreglo u objeto y guardarlos en una variable.
*/
// con arreglo
const amigos = ['pedro','pablo','jacinto','jose'];
const [amigo1, amigo2, amigo3, amigo4] = amigos;
console.log(amigo2);


// con un objeto
const persona = {
    nombre:'facundo',
    edad:21,
    pais:'africa',
};
const {nombre, edad, pais} = persona;
console.log(nombre, edad, pais);

const mostrardatos = ({nombre, edad}) => {//entre llaves{} recoje un objeto completo, en este caso nombre y edad.
    console.log(`${nombre} tiene ${edad} años`);
};
mostrardatos(persona);