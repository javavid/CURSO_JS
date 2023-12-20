//Forma de poner la fecha: AAAA-MM-DD
//const fecha = new Date("2023-12-19");
const fecha = new Date();
fecha.setFullYear(2030);
fecha.setMonth(4);
fecha.setDate(31);

let mes = fecha.getMonth();
let resultado = fecha.getDate() + '/' + fecha.getMonth() + '/' + fecha.getFullYear();




console.log(fecha);
