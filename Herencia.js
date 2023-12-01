class Ususario{
    constructor(usuario, password){
    this.user = usuario;
    this.contraseña = password;
    }
    obtenerposts(){
        const post = ['post1','post2'];
        return post;
    }
}

class Moderador extends Ususario { // herencia con extends de esta forma heredamos Usuario.
constructor(usuario, password, permisos){
super(usuario, password); // con super() podemos copiar todos los metodos, propiedades y  constructores,
this.permi = permisos;    // de la clase padre ose Usuario.
}
}

const users = new Ususario('pedro', 54321);
console.log(users);

const users2 = new Moderador('maria', 109876, ['borrar','editar']);//arreglo que contenga los permisos.
console.log(users);