"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Consulta = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

var Consulta = /*#__PURE__*/function () {
  function Consulta() {
    _classCallCheck(this, Consulta);
  }

  _createClass(Consulta, [{
    key: "personajes",
    value: function personajes() {
      fetch("https://rickandmortyapi.com/api/character") //recibe un parametro una URL
      .then(function (respuesta) {
        return respuesta.json();
      }) //LOS DATOS RECIBIDOS SON CONVERTIDOS A FORMATO JSON
      .then(function (respuesta) {
        //SE RECIBEN LOS DATOS EN FORMATO JSON
        // console.log(respuesta);//SE MUESTRAN LOS DATOS OBTENIDOS
        var results = respuesta.results; //se obtinen los personajes

        var personajes = "";
        var contador = 0;
        results.map(function (personaje) {
          //se recorre el arreglo de personajes
          var created = personaje.created,
              gender = personaje.gender,
              id = personaje.id,
              image = personaje.image,
              location = personaje.location,
              name = personaje.name,
              origin = personaje.origin,
              species = personaje.species,
              status = personaje.status,
              url = personaje.url;
          if (contador < 10) personajes += "\n                <div class=\"card\">\n                    <div class=\"card-title text-center\">\n                        <h1 class=\"display-4\">".concat(name, " | No. ").concat(id, "</h1>\n                    </div>\n                    <div class=\"card-body\">\n                        <div class=\"row\">\n                            <div class=\"col-md-8 align-self-center\">\n                                <p><b>Creacion: </b>").concat(created, "</p>\n                                <p><b>Genero: </b>").concat(gender, "</p>\n                                <p><b>Localizacion: </b>").concat(location.name, "</p>\n                                <p><b>Origen: </b>").concat(origin.name, "</p>\n                                <p><b>Especie: </b>").concat(species, "</p>\n                                <p><b>Estado: </b>").concat(status, "</p>\n                            </div>\n                            <div class=\"col-md-4 align-self-center\">\n                                <img class=\"img-fluid mb-3\" src=\"").concat(image, "\" alt=\"\">\n                                <a class=\"btn btn-primary\" href=\"").concat(url, "\">Ver mas</a>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n                ");
          contador++;
        });
        $("#personajes").html(personajes);
      })["catch"](function (error) {
        //SE ATRAPA UN ERROR EN CASO DE EXISTIR
        console.log(error); //SE MUESTRA EL ERROR
      });
    }
  }, {
    key: "ubicaciones",
    value: function ubicaciones() {
      fetch("https://rickandmortyapi.com/api/location") //recibe un parametro una URL
      .then(function (respuesta1) {
        return respuesta1.json();
      }) //LOS DATOS RECIBIDOS SON CONVERTIDOS A FORMATO JSON
      .then(function (respuesta1) {
        //SE RECIBEN LOS DATOS EN FORMATO JSON
        console.log(respuesta1);
        var results = respuesta1.results; //se obtinen los personajes

        console.log(results); //SE MUESTRAN LOS DATOS OBTENIDOS

        var ubicaciones = "";
        var contador = 0;
        results.map(function (ubicaciones) {
          //se recorre el3 arreglo de personajes
          var _ubicaciones = ubicaciones,
              id = _ubicaciones.id,
              name = _ubicaciones.name,
              type = _ubicaciones.type,
              dimension = _ubicaciones.dimension,
              residents = _ubicaciones.residents,
              url = _ubicaciones.url,
              created = _ubicaciones.created;
          if (contador < 10) ubicaciones += "\n                <div class=\"card\">\n                    <div class=\"card-title text-center\">\n                        <h1 class=\"display-4\">".concat(name, " | No. ").concat(id, "</h1>\n                    </div>\n                    <div class=\"card-body\">\n                        <div class=\"row\">\n                            <div class=\"col-md-8 align-self-center\">\n                                <p><b>Tipo: </b>").concat(type, "</p>\n                                <p><b>Dimension: </b>").concat(dimension, "</p>\n                                <p><b>Residente: </b>").concat(residents, "</p>\n                                <p><b>Creado: </b>").concat(created, "</p>\n                            </div>\n                            <div class=\"col-md-4 align-self-center\">\n                                <a class=\"btn btn-primary\" href=\"").concat(url, "\">Ver mas</a>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n                ");
          contador++;
        });
        $("#hello").html(ubicaciones);
      })["catch"](function (error) {
        //SE ATRAPA UN ERROR EN CASO DE EXISTIR
        console.log(error); //SE MUESTRA EL ERROR
      });
    }
  }]);

  return Consulta;
}();

exports.Consulta = Consulta;