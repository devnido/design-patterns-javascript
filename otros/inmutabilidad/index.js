// definir con const para que los objetos no cambien
const obj = {
    a: 1
}
obj.b = 2
    // si queremos cambiar su estructura completa

const obj2 = {
    ...obj,
    c: 4
}

obj.c = 3
console.log(obj, obj2);