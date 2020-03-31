const saludar = name => console.log(`Hola! soy ${name}`)
const despedir = () => console.log(`Hola!`)
const dormir = () => console.log(`ZZzzzzz..`)

const persona = {
    nombre: 'lala',
    saludar: () => saludar(persona.nombre)
)

persona.saludar()

// con clase

class Persona {
    constructor() {
        this.nombre = 'lala'
    }

    saludar() {
        saludar(this.nombre)
    }
    despedir() {
        despedir()
    }
    dormir() {
        dormir()
    }
}

class Robot {
    constructor() {
        this.nombre = 'lala'
    }

    saludar() {
        saludar(this.nombre)
    }
    despedir() {
        despedir()
    }

}