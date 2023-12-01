class Usuario{
    static num = 222;

    constructor(nombre, email){
        this.name = nombre;
        this.correo = email;
    }
    
    static borrar(id_user){ // metodo statico.
        console.log(`El usuario con el id ${id_user} ha sido borrado de la base de datos`);
    }
}
Usuario.borrar(3); // de esta manera se llama un metodo estatico de una clase.
console.log(Usuario.num); 