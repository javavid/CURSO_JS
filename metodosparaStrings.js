// propiedad length.
// devuelve el numero de caracteres de una cadena de texto.
const texto = 'Ornitorrinco';
console.log('La cadena de texto tiene: ' + texto.length + ' caracteres.');

//.indexOf() y .lastIndexOf() devuelve el index del primer/ultimo caracter especificado.
const tex = 'Ornitorrinco';
//solo aparese la posiscion del caracter.
console.log(tex.indexOf('r'));
console.log(tex.lastIndexOf('r'));

/* .Slice()  devuelve un fragmento de una cadena de texto.
- 1er parametro - index desde dodne queremos cortar.
- 2do parametro - (opcional) index hasta dodne queremos cortar.
*/
const textos = 'Ornitorrinco';
console.log(textos.slice(7));//corto desde la posicion 7.
