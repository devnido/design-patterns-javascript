// moduloe revelador es compuesto por un ifi
// contiene constantes privadas y retornamos
// lo que debe ser accesible por el desarrollador
const result = (() => {
    const x = {}
    return {
        a: () => console.log(x),
        b: (key, val) => x[key] = val
    }
})()

// imprimer 'x'
result.a()

// agregamos una propiedad al objeto padre
result.b('queso', 'cabra')

// imprimir 'x' nuevamente 
result.a()

// no puedo acceder a 'x' directamente por que es privada
console.log(result.x);