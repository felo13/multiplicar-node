// Al inicio se acostumbra a poner los requireds
// Tipo 1: librerías propias de node
const fs = require('fs');
// Tipo 2: librerías que se instalan y que no son propias de node
// const fs = require('express');
// Tipo 3: archivos o librerías propias que creamos en el proyecto, se identifican por el ./
// const fs = require('./milib');

/* 
// Con esta solución no me dió para recibir el archivo, siempre me salia undefined
let crearArchivo = async(base) => {

    let tabla = '';
    let nomArchivo = `tablas/tabla-${base}.txt`;

    for (let index = 1; index <= 10; index++) {
        tabla += `${base} * ${index} = ${base * index}\n`;
    }

    fs.writeFile(nomArchivo, tabla, (err) => {
        if (err) throw new Error('ERROR GARRAFAL');
        else {

            console.log(nomArchivo);
            return nomArchivo;
        }
    });
}; */
let crearArchivo = (base, limite) => {

    return new Promise((resolve, reject) => {

        if (!Number(base) || !Number(limite)) {
            reject(`El valor introducido ${base} ó ${limite} No es un número`);
            return;
        }

        let tabla = '';
        let nomArchivo = `tablas/tabla-${base}.txt`;

        for (let index = 1; index <= limite; index++) {
            tabla += `${base} * ${index} = ${base * index}\n`;
        }

        fs.writeFile(nomArchivo, tabla, (err) => {
            if (err) reject(err);
            else
                resolve(nomArchivo);
        });
    });
};

let listarTabla = (base, limite) => {

    let tabla = '';
    for (let index = 1; index <= limite; index++) {
        tabla += `${base} * ${index} = ${base * index}\n`;
    }
    return tabla;
};

module.exports = {
    crearArchivo,
    listarTabla
};