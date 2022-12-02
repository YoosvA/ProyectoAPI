export const promesa = new Promise((resolve, reject) => {
    reject();
}).then(() => document.write('correcto')).catch(() => document.write('Error'));


