const promesa = new Promise((resolve, reject) => {
    //Accion que s ejecutara.
    setTimeout(() => {
        const exito = false;//hacer pureba co false o true.
        if(exito){
            resolve('la operacion tubo exito');
        }else{
            reject('no tubo exito');
        }
    }, 2000);//2000 es equivalente a 2 segundos que va amostrar el mensaje.
});

promesa.then((mensaje) => {
alert(mensaje);
});

promesa.catch((mensaje) => {
    alert(mensaje);
});