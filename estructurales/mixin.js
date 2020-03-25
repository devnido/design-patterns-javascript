// tomar una clase que ya existe y agregarle funcionalidades sin alterar la clase que existe
let mixin = {
    saludar() {
        console.log(`Hola ${this.nombre}`)
    },
    despedir() {
        console.log(`Chao ${this.nombre}`)
    }
}

class Usuario {
    constructor(nombre) {
        this.nombre = nombre
    }
}

// agrgamos al prototipo de la clase Usuario las funciones mixin
Object.assign(Usuario.prototype, mixin)

const usuario = new Usuario('Perro loco')
usuario.saludar()