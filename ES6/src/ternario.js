export default class Operador {
    constructor (dato) {
        this.dato = dato
    }
    validacion(){
        return typeof(this.dato) != "" ? (this.dato == null ? `El valor es nulo` : `Debes ingresar un numero`) : (this.dato > 2 ? `Es mayor a 2!` : `Es menor a 2!`);
    }
}
/* validar tipo de dato ingresado
-nulo---
-vacio
-numero---
-cadena---
-indefinido
-objeto--- */
/* const ternario = new Operador(1);
document.write(ternario.validacion()); */