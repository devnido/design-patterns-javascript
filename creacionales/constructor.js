// ES6 -> es solo azucar sintactica
class MiClass {
    constructor() {
        this.property = 1
        this.method = () => {
            //soy un methodo
        }
    }
}
const instance = new MiClass()
console.log(instance);

// -----------------------------

// Antes de ES6 se usaban funciones para definir objetos
function MiClass2() {

    this.property = 2
    this.method = function() {
        //soy un methodo

    }
}
const instance2 = new MiClass2()
console.log(instance2);