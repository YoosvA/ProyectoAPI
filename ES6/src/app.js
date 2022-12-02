// import Operador from "./ternario";
// import {promesa,promesa2} from "./promesa";


// const ternario = new Operador(1);
// document.write(ternario.validacion());

// se usa para importar funciones que han sido exportadas desde un módulo externo.
// indicamos la ruta
// import {prueba} from "./modulo1";
// import prueba2 from "./modulo1";

//mandamos a llamar dicha funcion
// prueba();
// prueba2();

import {Consulta} from "./fetch";
let rick = new Consulta();
rick.personajes();
rick.ubicaciones();
rick.episodios();

