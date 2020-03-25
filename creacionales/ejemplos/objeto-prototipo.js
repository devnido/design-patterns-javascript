// estamos agregando una funcion al prototipo de 'Object'
// no usar arrow function en esta implementación
// prototipe es un metodo statico
Object.prototype.log = function() {
    console.log(this);
}

// 'x' es un objeto que es una instancia por defecto de 'Object'
const x = { a: 1 }

x.log()

if (!String.prototype.trim) {
    console.log('trim no existe');
    String.prototype.trim = function() {
        try {
            return this.replace(/^\s+|\s+$/g, "")
        } catch (e) {
            return this
        }
    }
} else {
    console.log('trim existe');

}

const y = "   lala ".trim()

// tiene el log por que String hereda de Object
y.log()