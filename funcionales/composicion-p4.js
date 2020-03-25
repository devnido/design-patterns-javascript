const users = [
    { edad: 17, nombre: 'Juan', apellido: 'Perez' },
    { edad: 18, nombre: 'Alan', apellido: 'Brito' },
    { edad: 12, nombre: 'Juan Carlos', apellido: 'Bodoque' },
    { edad: 1, nombre: 'Marcia', apellido: 'Ana' }
]

// estas funciones hay que enviarlas a un archivo utils y llamarlas de a una
const compose = (...fns) => x => fns.reduceRight((y, f) => f(y), x)

const pipe = (...fns) => x => fns.reduce((y, f) => f(y), x)

const filter = f => xs => xs.filter(f)

const trace = x => y => { console.log(x, y); return y }

const head = xs => xs[0]

const formateo = x => ({
    nombreCompleto: `${x.nombre} ${x.apellido}`,
    edad: x.edad
})
const formato = x => `${x.nombreCompleto} tiene ${x.edad} año(s)`


// esto es una composicion de funciones
// let traeAlPrimerInfante = data => compose(
//     formato,
//     formateo,
//     head,
//     xs => xs.filter(x => x.edad < 2)
// )(data)

// pero aplicando point free 
let traeAlPrimerInfante = data => pipe(
    filter(x => x.edad < 25),
    trace('despues de filter'),
    head,
    trace('despues de head'),
    formateo,
    trace('despues de formateo'),
    formato,
    trace('despues de formato'),
)(data)

traeAlPrimerInfante(users)



// continua parte 4