const boleto = 'regular';
let codigoDeAcceso;

codigoDeAcceso = (boleto === 'vip') ? 'vip-123-456' : 'regular-789-101112';
console.log(codigoDeAcceso);