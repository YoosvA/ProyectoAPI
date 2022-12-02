"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

var Operador = /*#__PURE__*/function () {
  function Operador(dato) {
    _classCallCheck(this, Operador);

    this.dato = dato;
  }

  _createClass(Operador, [{
    key: "validacion",
    value: function validacion() {
      return typeof this.dato != "" ? this.dato == null ? "El valor es nulo" : "Debes ingresar un numero" : this.dato > 2 ? "Es mayor a 2!" : "Es menor a 2!";
    }
  }]);

  return Operador;
}();
/* validar tipo de dato ingresado
-nulo---
-vacio
-numero---
-cadena---
-indefinido
-objeto--- */

/* const ternario = new Operador(1);
document.write(ternario.validacion()); */


exports["default"] = Operador;