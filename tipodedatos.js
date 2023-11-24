//cadena de texto.
const nombre = 'pepe';

//number
let num = 28;

//boolean
const mayor = true;
const nomayor = false;

//arrays
const arreglos = ['Años', 22, true, {propiedad: 'valor'} [1, 2, 3]];

//objetos
const usuario = {
    nombre: 'darlin',
    apellido: 'fish',
    edad: 22,
    email: 'dar@gmail.comm',
    auto: {
        marca: 'BMW',
        tipo: 'deportivo',
        color: 'gris',
    },
};
console.log(usuario);//si quiere acceder solo a un dato en especifico entonces es asi: console.log(usuario.nombre); o aun mas adentro es asi:console.log(usuario.auto.color);

//funsiones
function hola(){
    console.log('hola putos');
}
hola();

//null
//normalmente lo usamos cuando queremos especificar que un valor sea nulo.
let vari = null;

//undefine
//undefined se usa para indicarnos que un valor no esta definido.
let mivari = undefined;
