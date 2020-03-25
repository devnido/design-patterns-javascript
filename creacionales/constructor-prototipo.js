// Objeto con prototipo
class MiClass {
    constructor(p1, p2) {
        this.property1 = p1
        this.property2 = p2
    }

    method() {
        // soy un metodo de prototipo
    }
}
const instance = new MiClass(4, 2)
console.log(instance);

// esta forma de aceder al prototipo para modificarlo está deprecada por un acuerdo en conjunto de las empresas de navegadores web
// solo se puede acceder a el desde el navegador web y solo para consultarlo
console.log(instance.__proto__);