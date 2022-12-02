/* const objeto = [
    {
        nombre: 'HTML',
        duracion: 18,
        estado: true,
        temas: [
            "etiquetas",
            "leguaje",
            "estilos"
        ],
        "examen": {
            "unidad1": 100,
            "unidad2": 90,
            "unidad3": 80,
            "unidad4":["primera","segundas"]
        }
    },
    {
        nombre: 'JAVA',
        duracion: 15,
        estado: false,
        temas: [
            "fundamentos",
            "clases",
            "herencia"
        ],
        "examen": {
            "unidad1": 90,
            "unidad2": 100,
            "unidad3": 10,
            "unidad4":["primera","segundas"]
        }
    },
    {
        nombre: 'PHP',
        duracion: 10,
        estado: true,
        temas: [
            "objetos",
            "clases",
            "herencia"
        ],
        "examen": {
            "unidad1": 100,
            "unidad2": 10,
            "unidad3": 90,
            "unidad4":["primera","segundas"]
        }
    }
];
class Arreglo {
    constructor (arreglo) {
        this.arreglo = arreglo 
        this.recorrerObjeto();
    }
    recorrerObjeto () {
        this.arreglo.map(lenguaje => this.extraerContenido(lenguaje));
    }
    extraerContenido ({nombre, estado, temas, examen } = objeto) {
        document.write(`<b>Lneguaje:</b> ${nombre} <br> <b>Estado:</b> ${estado} <br> <b>Temas:</b> <br>`);
        this.recorrerArreglo(temas);
        this.extraerUnidades(examen);
    }
    recorrerArreglo (arreglo) {
        arreglo.map(tema =>  document.write(`<b>--T:</b> ${tema}<br>`));
    }
    extraerUnidades ({unidad1, unidad4} = examen){
        document.write(`<b>Unidad 1:</b> ${unidad1}<br><b>Unidad 4:</b><br>`);
        this.contenidoUnidad(unidad4);
    }
    contenidoUnidad(unidad){
        unidad.map(contenido => document.write(`<b>--U4 resultado:</b> ${contenido}<br>`));
        document.write(`<hr>`);
    }
}
class ArregloHijo extends Arreglo{}
const inicio = new ArregloHijo(objeto);
 */
/* class Persona {
    constructor(nombre = "Diego", apellido="sin apellido", carrera="sin carrera"){
        this.nombre = nombre,
        this.apellido = apellido,
        this.carrera = carrera
    }
    mostrarContenido(mensaje = "Hola bienvenido "){
        return document.write( `<br>${mensaje} ${this.nombre} de ${this.carrera} ${this.calcularLetras()}`);
    }
    calcularLetras() {
        return `<br>Tu nombre tiene ${this.nombre.length} letras`;
    }
}
class HijoPersona extends Persona {
    constructor(nombre = "Diego", apellido="sin apellido", carrera="sin carrera", email = "ejemplo@mail.com") {
        super(nombre, apellido, carrera);
        this.email = email
    }
    mostrarCorreo () {
        return document.write(`<br>Tu correo electronico es: ${this.email}`);
    }
    calcularLetras() {
        return document.write(`<br>Metodo desde hijo tu nombre tiene: ${this.nombre.length} letras`);
    }
}

const padre = new Persona("Ana","Jimenez","Gestion");
const hijo = new HijoPersona("Juan","Lopez","Industrial","juan@gmail.com");
padre.mostrarContenido();
hijo.calcularLetras();
hijo.mostrarCorreo(); */