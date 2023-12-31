//operadores aritmeticos.
/*
= de asignacion.
+ suma.
- resta.
* multiplicacion.
/ division.
% modulo.
++ incremento.
-- decremento.
*/

//Operadores de asignacion.
/*
+= suma un numero al valor de una variable.
-= resta un numero al valor de una variable.
*= multiplica un numero al valor de una variable.
/= divide un numero al valor de una variable.
%= obtiene el sobrante de una divicion y lo asigna a la variable.
*/
let numers = 25 % 2;//25 se divide en dos partes por lo que seria 24 y sobra 1. 
console.log(numers);

//Operadores de comparacion.
/*
== igual que.
=== igual en valor y tipo de valor.
!= diferente.
!== diferente en valor y diferente en tipo.
> mayor que.
< menor que.
>= mayor e igual que.
<= menor e igual que.
? operador ternario.
*/

let numr = 5 > 3 ? 'si' : 'no';// asi se utiliza el  Operador ternario.
console.log(numr);

//Operadores logicos.
/*
&& And
|| Or
! Not
*/
const nom = 'carlos';
const edad = 17;
const tieneEntrada = true;
const tienePermiso = true;

const permitirAcceso = (edad >= 18 && tieneEntrada) || tienePermiso;
console.log( '¿Acceso permitido?' + permitirAcceso);