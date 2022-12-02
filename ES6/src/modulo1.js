//export : nos permite exportar valores, objetos y estilos desde los módulos de Node. js. 
// Junto con el uso de require Para importar otros módulos, 
// tenemos un ecosistema completo para componer grandes programas a partir de partes más pequeñas.
export const prueba = () =>{
    document.write(`Modulo 1`);
}

const prueba2 = () =>{
    document.write(`funcion 2`);
}

//crear módulos que exporten un único valor.
export default prueba2;

