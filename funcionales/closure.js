// funcionalidad de js que permite reutilizar codigo
// alcance de las funciones
const y = 'lele'
const f = () => {
    const x = 'lala'
    console.log(x, y) // lala lele

}

const g = () => {
    const a = 'lala'
    console.log(a, y) // log: lala lele
        //  console.log(a, x) // error

}

const h = () => {
    const x = 'lala'
    return () => {
        const z = 'lolo'
        console.log(x, y, z)
    }
}


f()

g()

h()()

console.log(y);