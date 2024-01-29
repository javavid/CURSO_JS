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
const indice = textos.lastIndexOf('r');
console.log(textos.slice(indice));//corto desde la posicion 7, si vas a poner el parametro en numero.

/* .replace()  devuelve una cadena de texto donde remplaza un valor por otro.
- 1er parametro - el texto que queremos remplazar.
- 2do parametro - el texto que queremos poner.
*/
const nom = 'tiranosauriorex';
console.log(nom.replace('rex', 'gay'));

// .split()  convierte una cadena de texto en un arreglo.
// tenemos que especificar donde cortar cada elemento.
// 1er parametro - el cararcter que funcionara como separador.
const txt = 'escolopendra';
console.log(txt.split('e'));

// .toUppercase()  .toLowercase()  devuelve una cadena de texto de puras Mayusculas/Minusculas.
console.log(txt.toUpperCase());
console.log(txt.toLowerCase());

