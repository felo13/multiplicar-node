/* const argv = require('yargs')
    .command('listar', 'Imprime en consola la tabla de multiplicar', {
        base: {
            demand: true,
            alias: 'b'
        },
        limite: {
            alias: 'l',
            default: 10
        }
    })
    .command('crear', 'Crea la tabla de multiplicar en un archivo', {
        base: {
            demand: true,
            alias: 'b'
        },
        limite: {
            alias: 'l',
            default: 10
        }
    })
    .help()
    .argv; */
// const argv = require('yargs').argv;

const argv = require('./config/yargs').argv
const colors = require('colors');
const { crearArchivo, listarTabla } = require('./multiplicar/multiplicar');




let argv2 = process.argv;
let base = argv.base;
let limite = argv.limite;
let comando = argv._[0];

//siempre los personalizados empiezan en la tercera posición
// let param = argv2[2];
// let base = param.split('=')[1];
console.log(argv);
console.log(argv2);
console.log(comando);

switch (comando) {
    case 'listar':
        console.log('***********************'.bgMagenta.white);
        console.log(`*****TABLA DEL ${base}******`.bgMagenta.white);
        console.log('***********************'.bgMagenta.white);
        console.log(`${listarTabla(base, limite)}`.blue);
        break;

    case 'crear':
        crearArchivo(base, limite)
            .then(archivo => console.log(colors.green(`El archivo ${archivo.red} ha sido creado`)))
            .catch(e => console.log('ERROR al ESCRIBIR VER STACK: ', e));
        break;

    default:
        console.log('Comando no reconocido');
        break;
}