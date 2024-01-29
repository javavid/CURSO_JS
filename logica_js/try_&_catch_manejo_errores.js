try{
//llamado al backend (a traves de API)
console.log('llamado al backend');
throw('cliente no esta apto para la compra');
}catch(error){
//tomamos el error y buscamos algo que nos parezca correcto
console.log('algo fallo',error);
}finally{
//se ejecuta siempre por mas que falle o no falle
console.log('se ejecuta siempre');
}