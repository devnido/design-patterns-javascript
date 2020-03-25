const users = [
    { edad: 17, nombre: 'Juan', apellido: 'Perez' },
    { edad: 18, nombre: 'Alan', apellido: 'Brito' },
    { edad: 12, nombre: 'Juan Carlos', apellido: 'Bodoque' },
    { edad: 1, nombre: 'Marcia', apellido: 'Ana' }
]

const traeAlPrimerInfante = data => {

    const infantes = data.filter(x => x.edad < 2)
    const primerInfante = infantes[0]
    const infante = {
        nombreCompleto: `${primerInfante.nombre} ${primerInfante.apellido}`,
        edad: primerInfante.edad
    }

    return `${infante.nombreCompleto} tiene ${infante.edad} año(s)`


}

// continua parte 2... se escribira de una mejor manera