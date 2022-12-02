/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/app.js":
/*!********************!*\
  !*** ./src/app.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _fetch__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./fetch */ \"./src/fetch.js\");\n// import Operador from \"./ternario\";\n// import {promesa,promesa2} from \"./promesa\";\n// const ternario = new Operador(1);\n// document.write(ternario.validacion());\n// se usa para importar funciones que han sido exportadas desde un módulo externo.\n// indicamos la ruta\n// import {prueba} from \"./modulo1\";\n// import prueba2 from \"./modulo1\";\n//mandamos a llamar dicha funcion\n// prueba();\n// prueba2();\n\nvar rick = new _fetch__WEBPACK_IMPORTED_MODULE_0__.Consulta();\nrick.personajes();\nrick.ubicaciones();\nrick.episodios();\n\n//# sourceURL=webpack:///./src/app.js?");

/***/ }),

/***/ "./src/fetch.js":
/*!**********************!*\
  !*** ./src/fetch.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Consulta\": () => (/* binding */ Consulta)\n/* harmony export */ });\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, \"prototype\", { writable: false }); return Constructor; }\n\nvar Consulta = /*#__PURE__*/function () {\n  function Consulta() {\n    _classCallCheck(this, Consulta);\n  }\n\n  _createClass(Consulta, [{\n    key: \"personajes\",\n    value: function personajes() {\n      fetch(\"https://rickandmortyapi.com/api/character\") //recibe un parametro una URL\n      .then(function (respuesta) {\n        return respuesta.json();\n      }) //LOS DATOS RECIBIDOS SON CONVERTIDOS A FORMATO JSON\n      .then(function (respuesta) {\n        //SE RECIBEN LOS DATOS EN FORMATO JSON\n        // console.log(respuesta);//SE MUESTRAN LOS DATOS OBTENIDOS\n        var results = respuesta.results; //se obtinen los personajes\n\n        var personajes = \"\";\n        var contador = 0;\n        results.map(function (personaje) {\n          //se recorre el arreglo de personajes\n          var created = personaje.created,\n              gender = personaje.gender,\n              id = personaje.id,\n              image = personaje.image,\n              location = personaje.location,\n              name = personaje.name,\n              origin = personaje.origin,\n              species = personaje.species,\n              status = personaje.status,\n              url = personaje.url;\n          if (contador < 10) personajes += \"\\n                <div class=\\\"card mt-2\\\" style=\\\"background-color: black;\\\" data-aos=\\\"zoom-in\\\"\\n                data-aos-duration=\\\"4000\\\">\\n                    <div class=\\\"card-title text-center\\\" style=\\\"color:pink ;\\\">\\n                        <h1 class=\\\"display-4\\\">\".concat(name, \" | No. \").concat(id, \"</h1>\\n                    </div>\\n                    <div class=\\\"card-body\\\" style=\\\"color: white ;\\\">\\n                        <div class=\\\"row\\\">\\n                            <div class=\\\"col-md-8 align-self-center\\\">\\n                                <p><b>Creacion: </b>\").concat(created, \"</p>\\n                                <p><b>Genero: </b>\").concat(gender, \"</p>\\n                                <p><b>Localizacion: </b>\").concat(location.name, \"</p>\\n                                <p><b>Origen: </b>\").concat(origin.name, \"</p>\\n                                <p><b>Especie: </b>\").concat(species, \"</p>\\n                                <p><b>Estado: </b>\").concat(status, \"</p>\\n                            </div>\\n                            <div class=\\\"col-md-4 align-self-center\\\">\\n                                <img class=\\\"img-fluid mb-3 rounded\\\" src=\\\"\").concat(image, \"\\\" alt=\\\"\\\" data-aos=\\\"zoom-in\\\">\\n                            </div>\\n                        </div>\\n                    </div>\\n                </div>\\n                \");\n          contador++;\n        });\n        $(\"#personajes\").html(personajes);\n      })[\"catch\"](function (error) {\n        //SE ATRAPA UN ERROR EN CASO DE EXISTIR\n        console.log(error); //SE MUESTRA EL ERROR\n      });\n    }\n  }, {\n    key: \"ubicaciones\",\n    value: function ubicaciones() {\n      fetch(\"https://rickandmortyapi.com/api/location\") //recibe un parametro una URL\n      .then(function (respuesta1) {\n        return respuesta1.json();\n      }) //LOS DATOS RECIBIDOS SON CONVERTIDOS A FORMATO JSON\n      .then(function (respuesta1) {\n        //SE RECIBEN LOS DATOS EN FORMATO JSON\n        console.log(respuesta1);\n        var results = respuesta1.results; //se obtinen los personajes\n        //console.log(results);//SE MUESTRAN LOS DATOS OBTENIDOS\n\n        var ubicaciones = \"\";\n        var contador = 0;\n        results.map(function (ubicacion) {\n          //se recorre el3 arreglo de personajes\n          var id = ubicacion.id,\n              name = ubicacion.name,\n              type = ubicacion.type,\n              dimension = ubicacion.dimension,\n              residents = ubicacion.residents,\n              url = ubicacion.url,\n              created = ubicacion.created;\n          var characters1 = [\"Rick Sanchez\", \"Morty Smith\", \"Summer Smith\", \"Beth Smith\", \"Jerry Smith\", \"Abadango Cluster Princess\", \"Abradolf Lincler\"];\n          if (contador < 10) ubicaciones += \"\\n                <div class=\\\"card mt-2\\\" style=\\\"background-color: black;\\\" data-aos=\\\"zoom-in\\\"\\n                data-aos-duration=\\\"4000\\\">\\n                    <div class=\\\"card-title text-center\\\" style=\\\"color: rgb(139, 25, 139);\\\">\\n                        <h1 class=\\\"display-4\\\">\".concat(name, \" | No. \").concat(id, \"</h1>\\n                    </div>\\n                    <div class=\\\"card-body\\\" style=\\\"color: white ;\\\">\\n                        <div class=\\\"row\\\">\\n                            <div class=\\\"col-md-8 align-self-center\\\">\\n                                <p><b>Tipo: </b>\").concat(type, \"</p>\\n                                <p><b>Dimension: </b>\").concat(dimension, \"</p>\\n                                <p><b>Residente: </b>\").concat(characters1, \"</p>\\n                                <p><b>Creado: </b>\").concat(created, \"</p>\\n                            </div>\\n                            <div class=\\\"col-md-4 align-self-center\\\" alt=\\\"\\\" data-aos=\\\"zoom-in\\\">\\n                                \\n                            </div>\\n                        </div>\\n                    </div>\\n                </div>\\n                \");\n          contador++;\n        });\n        $(\"#hello\").html(ubicaciones);\n      })[\"catch\"](function (error) {\n        //SE ATRAPA UN ERROR EN CASO DE EXISTIR\n        console.log(error); //SE MUESTRA EL ERROR\n      });\n    }\n  }, {\n    key: \"episodios\",\n    value: function episodios() {\n      fetch(\"https://rickandmortyapi.com/api/episode\") //recibe un parametro una URL\n      .then(function (respuesta2) {\n        return respuesta2.json();\n      }) //LOS DATOS RECIBIDOS SON CONVERTIDOS A FORMATO JSON\n      .then(function (respuesta2) {\n        //SE RECIBEN LOS DATOS EN FORMATO JSON\n        console.log(respuesta2);\n        var results = respuesta2.results; //se obtinen los personajes\n        //console.log(results);//SE MUESTRAN LOS DATOS OBTENIDOS\n\n        var episodios = \"\";\n        var contador = 0;\n        results.map(function (episodio) {\n          //se recorre el3 arreglo de personajes\n          var id = episodio.id,\n              name = episodio.name,\n              air_date = episodio.air_date,\n              episode = episodio.episode,\n              characters = episodio.characters,\n              url = episodio.url,\n              created = episodio.created;\n          var characters2 = [\"Rick Sanchez\", \"Morty Smith\", \"Summer Smith\", \"Beth Smith\", \"Jerry Smith\", \"Abadango Cluster Princess\", \"Abradolf Lincler\"];\n          if (contador < 10) episodios += \"\\n                <div class=\\\"card mt-2\\\" style=\\\"background-color: black;\\\" data-aos=\\\"zoom-in\\\"\\n                data-aos-duration=\\\"4000\\\">\\n                    <div class=\\\"card-title text-center\\\" style=\\\"color: greenyellow;\\\">\\n                        <h1 class=\\\"display-4\\\">\".concat(name, \" | No. \").concat(id, \"</h1>\\n                    </div>\\n                    <div class=\\\"card-body\\\" style=\\\"color: white ;\\\">\\n                        <div class=\\\"row\\\">\\n                            <div class=\\\"col-md-8 align-self-center\\\">\\n                                <p><b>Fecha: </b>\").concat(air_date, \"</p>\\n                                <p><b>epsiodio: </b>\").concat(episode, \"</p>\\n                                <p><b>personajes: </b>\").concat(characters2, \"</p>\\n                                <p><b>Creado: </b>\").concat(created, \"</p>\\n                            </div>\\n                            <div class=\\\"col-md-4 align-self-center\\\" alt=\\\"\\\" data-aos=\\\"zoom-in\\\">\\n                                \\n                            </div>\\n                        </div>\\n                    </div>\\n                </div>\\n                \");\n          contador++;\n        });\n        $(\"#episodios\").html(episodios);\n      })[\"catch\"](function (error) {\n        //SE ATRAPA UN ERROR EN CASO DE EXISTIR\n        console.log(error); //SE MUESTRA EL ERROR\n      });\n    }\n  }]);\n\n  return Consulta;\n}();\n\n//# sourceURL=webpack:///./src/fetch.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/app.js");
/******/ 	
/******/ })()
;