const operacion = (tipo, num1, num2) => {
//let resultado;
if (tipo === 'suma'){
    return num1 + num2;
//resultado = num1 + num2;
}else if (tipo === 'resta'){
    return num1 - num2;
//resultado = num1 - num2;
}
//return resultado;
}

const miVariable = operacion('suma', 6, 6);
console.log(miVariable);