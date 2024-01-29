/*scope bloque o alcance de tipo bloque.
- pertenecen las variables declaradas con const o let dentro de un bloque {}.
- solo podemos acceder a ellas dentro del bloque.
*/ 

const edad = 21;
if (edad >= 18){
const accesoPermitido = true;
if (true){
    console.log(accesoPermitido);
}

const mifuncion = () => {
    console.log(accesoPermitido);
};
mifuncion();
}