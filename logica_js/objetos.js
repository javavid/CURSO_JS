const persona = {
    nombre: 'luis',
    edad: 21,
    email: 'cdv@gmail.com',
    suscripciones:{
        web: true,
        email: true
    },
    coloresfavoritos:['negro', 'blanco', 'gris'],
    saludo: function(){
        console.log('hola heteros');
    },
}
//formas de acceder a los objeto.
console.log(persona);
console.log(persona.coloresfavoritos);
console.log(persona['edad']);

persona.pais = 'Colombia';//de esta manera se agregan mas elementos al objeto.
console.log(persona);
persona.saludo();//de esta forma accedemos a la funsion del objeto.