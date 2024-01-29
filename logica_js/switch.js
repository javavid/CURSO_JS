const usuario = {
    edad: 21,
    pais: 'ecuador',
    ticket: true,
};


switch(usuario.pais){
case 'mexico':
    console.log('El usuario es mexicano');
    break;

    case 'canadad':
    console.log('El usuario es canadiense');
    break;

    case 'peru':
    console.log('El usuario es peruano');
    break;

    case 'argentina':
    console.log('El usuario es argentino');
    break;

    case 'ecuador':
    console.log('El usuario es ecuatoriano');
    break;

    default: 
    console.log('El usuario es de otro pais');
}