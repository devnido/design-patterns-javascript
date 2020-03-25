class Suma {
    constructor(v = 0) {
        this.val = v
    }

    suma(v) {
        this.val += v
        return this
    }
}


const valor = new Suma(2)

valor
    .suma(3)
    .suma(6)
    .val

console.log(valor
    .suma(3)
    .suma(6)
    .val);