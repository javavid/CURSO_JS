const nombres =['pipe','pedro','armando','facu','ronaldo','neymar','messi','lucho'];
nombres.forEach((nombre) => {
    console.log(nombre);
});


/* ciclo For  repite un bloque de codigo mientras se cumpla una condicion.
- Expresion 1: se ejecuta una sola vez antes de comenzar a repetir el bloque de codigo.
- Expresion 2: una condicion, mientras se cumpla se ejecutara el bloque de codigo.
- Expresion 3: esta exprecion se ejecuta siempre y despues de que se ejecute el bloque de codigo.
*/
for(let j = 1; j <= 10; j++){
console.log(j);
}

for(let n = 0; n < nombres.length; n++){
console.log(nombres[n]);
}