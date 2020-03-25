// funcion normal
const suma = (a, b) => a + b

suma(1, 5)

// funcion currying -- es la tecnica que transforma todas las funciones en funciones unarias (slo reciben 1 argumento)
const sumaC = a => b => a + b

const suma1 = sumaC(1)(5)

console.log(sum1);

// ..continua en composición