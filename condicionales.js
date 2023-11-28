/*const usuario = {
    edad: 17,
    pais: 'colombia',
    ticket: true,
};

if(usuario.edad >= 18){
console.log('esta persona es mayor de edad, puede pasar ');
}else{
    console.log('esta persona es menor de edad, no puede pasar ');
}*/

/*const usuario = {
    edad: 20,
    pais: 'colombia',
    ticket: false,
};

//condicionales anidados.
if(usuario.edad >= 18){
if(usuario.ticket){
console.log('El usuario es mayor de edad y tiene ticket.');
}else{
    console.log('El usuario es mayor de edad, pero no tiene ticket.');
}
}else{
    console.log('El usuario es menor de edad.');
}*/


const usuario = {
    edad: 20,
    pais: 'canadad',
    ticket: false,
};
//else if 
if(usuario.pais === 'canadad'){
console.log('El usuario es de canadad');
}else if (usuario.pais === 'mexico'){
    console.log('El usuario es de mexicano');
    }else if (usuario.pais === 'japon'){
        console.log('El usuario es de japon');
        }else{
            console.log('El usuario es de otro pais.');
        }
