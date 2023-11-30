/* Break;
- la sentencia break nos sirve para salir de bloques de tipo swicth.
- pero tambien nos sirve para forzar la salida de un ciclo.
*/

const nom = ['Armando','Alex','Arturo','Alexis','Amparo','Rosembell','Andres','Arnoldo','Abel'];

for(let i = 0; i < nom.length; i++){
if (nom[i][0] !== 'A'){// nom[i][0] accedemos  a [i] es la posicion, y a [0] es la primera letra de cada nombre.
    console.log('Alto hay un nombre que no empieza por la letra A');
    console.log(nom[i] + ' no empieza por la letra A');
break;
}
console.log(nom[i]);
}


//Continue;  la sentecia continue nos sirve para saltar a la siguiente iteracion.
const invitados = ['Pedro','Ferdi','Fernando','Fabian','Jorge','Adrian','Carlos'];
console.log('lista de personas aprobadas');
for(let h = 0; h < invitados.length; h++){
if (invitados[h] === 'Jorge') {
continue;
}
console.log(invitados[h]);
}
