/* Estrutura de una clase:
- Definicion
- propiedades: la clase puede contener variables. dentro de una clase se llaman propiedades.
- constructor: es un metodo especial para inicializar un objeto creado a partir de una clase.
- metodos: la clase puede tener funciones. dentro de una clase se llaman metodos.
*/
class Usuario {     //clase.
 tipo = 'usuario';

 constructor(nombre, apellido){  // construtor.
this.nom = nombre;
this.ape = apellido;
 }
 obtenerNombreCompleto(){              //metodo o funcion.
    return `${this.nom} ${this.ape}`;
 }
}
const user = new Usuario('david','hernandez');
console.log(user);

const user2 = new Usuario('julieta','mendez');
console.log(user2.obtenerNombreCompleto());