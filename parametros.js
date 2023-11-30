const saludo = (nombre) => {
    console.log(`hola ${nombre}`);
}
saludo('santi');
saludo('vanesa');
saludo('arllyn');

//Multiples parametros.
const operacion = (num1, num2) => {
    console.log(num1 + num2);
}
operacion(5,5);
operacion(5,4);
operacion(5,3);

const operations = (tipo, numero1, numero2) => {
    if (tipo === 'suma'){
console.log(numero1 + numero2);
    }else if (tipo === 'resta'){
        console.log(numero1 - numero2);
    }
};
operations('suma', 3, 3);
operations('resta', 8, 3);