"use strict";

/* const datos = (...info) => {//parametro Rest
    let [nombre, carrera, email, edad, ubicacion] = info
    document.write(`Nombre: ${nombre}<br>Carrera: ${carrera}<br>Email: ${email}`);
    document.write(`Edad: ${edad}<br>Ubicacion: ${ubicacion}`)
}

const mi_info = ["diego","sistemas","diego@gmail.com","25","Milpa Alta"];

datos(...mi_info);//parametro Spread
 */
var cadena = "esta es una cadena";
document.write(cadena);
document.write("<br>La cadena empieza con la letra e: ".concat(cadena.toLowerCase().startsWith('esta')));
document.write("<br>La cadena termina con la letra e: ".concat(cadena.toLowerCase().endsWith('e')));
document.write("<br>La cadena incluye 'hola': ".concat(cadena.includes('cadena')));
var mi_info = ["diego", "sistemas", "diego@gmail.com", "25", "Milpa Alta"];
document.write("<br>El arreglo 'mi_info' incluye 'sistemas': ".concat(mi_info.includes('sistemas')));
document.write("<br>Dato por posicion : ".concat(mi_info.find(function (info) {
  return info.length == 8;
})));
document.write("<br>Posicion : ".concat(mi_info.findIndex(function (info) {
  return info == "sistemas";
})));
/* realizar un programa que obtenga los datos de un arreglo de informacion personal. (aplicar clases y herencia)
aplicar el uso de las funciones:
-startsWith
-endsWith
-includes
-find
-findIndex
crear el arreglo vacio y llenarlo mendiante el uso parametro Rest.
contenido del arreglo:
    nombre
    apellidoP
    apellidoM
    Fecha de nacimiento
    edad
    escuela
    carrera
    direccion     
*/