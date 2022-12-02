let validacion = false, validacion2 = 1+1, validacion3 = "hola";

export const promesa = new Promise((resolve, reject) => {
    return validacion ? resolve() : reject();
}).then(() => document.write(`<br>Promesas Javascript`)).catch(() => document.write(`<br>Se ha generado un error!`));

export const promesa2 = new Promise((resolve, reject) => {
    return validacion2 == 2 ? resolve() : reject();
}).then(() => document.write(`<br>Es igual a 2`)).catch(() => document.write(`<br>No es igual 2`));

const promesa3 = new Promise((resolve, reject) => {
    return typeof(validacion3) == "string" ? resolve() : reject();
}).then(() => document.write(`<br>Es una cadena`)).catch(() => document.write(`<br>No es una cadena`));

