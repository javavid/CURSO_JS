import { barcelona, roma, paris, londres } from './ciudades.js';

//obtener los elementos del DOM
let enlaces = document.querySelectorAll('a');
let tituloElemento = document.getElementById('titulo');
let subtituloElemento = document.getElementById('subtitulo');
let parrafoElemento = document.getElementById('parrafo');

// agregar un evento click a cada enlace
enlaces.forEach(function (enlace) {
    enlace.addEventListener('click', function () {
        // Remover active de todos los enlaces
        enlaces.forEach(function (enlace) {
            enlace.classList.remove('active');
        });

        //agregar la clase "active" al enlace actual
        this.classList.add('active');

        //obtener el contenido correspondiente segun el enlace
        let contenido = obtenerContenido(this.textContent);

        //mostrar contenido en el DOM
        tituloElemento.innerHTML = contenido.titulo
        subtituloElemento.innerHTML = contenido.subtitulo
        parrafoElemento.innerHTML = contenido.parrafo
    });
});

//funcion para traer la informacion correcta desde ciudades.js
function obtenerContenido(enlace){
let contenido = {
    'Barcelona' : barcelona,
    'Roma' : roma,
    'Paris' : paris,
    'Londres' : londres
};
return contenido[enlace];
}