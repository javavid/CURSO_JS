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
borrarpost(id){
if(this.permi.includes('borrar')){ //includes() verifica si this.permi esta en moredador.
console.log(`El post con el ${id} ha sido borrado`);
}else{
    console.log('No tienes los permisis para borrar post');
}
}
}

const users = new Ususario('pedro', 54321);
console.log(users);

const users2 = new Moderador('maria', 109876, ['borrar','editar']);//arreglo que contenga los permisos.
console.log(users2.obtenerposts());
console.log(users2.permi);
users2.borrarpost(8);