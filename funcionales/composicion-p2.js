const users = [
    { edad: 17, nombre: 'Juan', apellido: 'Perez' },
    { edad: 18, nombre: 'Alan', apellido: 'Brito' },
    { edad: 12, nombre: 'Juan Carlos', apellido: 'Bodoque' },
    { edad: 1, nombre: 'Marcia', apellido: 'Ana' }
]


const head = xs => xs[0]
const formateo = x => ({
    nombreCompleto: `${x.nombre} ${x.apellido}`
    edad: x.edad
})
const formato = x => `${x.nombreCompleto} tiene ${x.edad} año(s)`


// esto es una composicion de funciones
const traeAlPrimerInfante = data => formato(formateo(head(data.filter(x => x.edad < 2))))




// continua parte 3