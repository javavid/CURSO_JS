const usuario = {
    nombre: 'david',
    edad: '28',
    amigos: ['pedro','pablo','jacinto','jose'],
    saludo: () => {
        console.log('hola granujas');
    },
};
//metodos propios los objetos pueden tener metodos personalizados.
usuario.saludo();

// Object.keys()  nos devuelve un arreglo con las llaves (keys) del objeto.
const resultado = Object.keys(usuario);
console.log(resultado);

// Object.values()  nos devuelve un arreglo con los valores (values) del objeto.
const resul = Object.values(usuario);
console.log(resul);