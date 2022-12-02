"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.promesa2 = exports.promesa = void 0;
var validacion = false,
    validacion2 = 1 + 1,
    validacion3 = "hola";
var promesa = new Promise(function (resolve, reject) {
  return validacion ? resolve() : reject();
}).then(function () {
  return document.write("<br>Promesas Javascript");
})["catch"](function () {
  return document.write("<br>Se ha generado un error!");
});
exports.promesa = promesa;
var promesa2 = new Promise(function (resolve, reject) {
  return validacion2 == 2 ? resolve() : reject();
}).then(function () {
  return document.write("<br>Es igual a 2");
})["catch"](function () {
  return document.write("<br>No es igual 2");
});
exports.promesa2 = promesa2;
var promesa3 = new Promise(function (resolve, reject) {
  return typeof validacion3 == "string" ? resolve() : reject();
}).then(function () {
  return document.write("<br>Es una cadena");
})["catch"](function () {
  return document.write("<br>No es una cadena");
});