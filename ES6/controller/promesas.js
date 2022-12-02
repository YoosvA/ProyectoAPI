"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.promesa = void 0;
var promesa = new Promise(function (resolve, reject) {
  reject();
}).then(function () {
  return document.write('correcto');
})["catch"](function () {
  return document.write('Error');
});
exports.promesa = promesa;