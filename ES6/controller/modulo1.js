"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.prueba = exports["default"] = void 0;

//export : nos permite exportar valores, objetos y estilos desde los módulos de Node. js. 
// Junto con el uso de require Para importar otros módulos, 
// tenemos un ecosistema completo para componer grandes programas a partir de partes más pequeñas.
var prueba = function prueba() {
  document.write("Modulo 1");
};

exports.prueba = prueba;

var prueba2 = function prueba2() {
  document.write("funcion 2");
}; //crear módulos que exporten un único valor.


var _default = prueba2;
exports["default"] = _default;