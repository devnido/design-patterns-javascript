// programacion donde nos olvidamos de los argumentos de una funcion

const f = (ruta, cb) => {
    // muchas lineas de codigo despues...
    const resultado = computacionPesada()
    cb(resultado)
}

const manejaResultado = (resultado) => {

}

f('/users', manejaResultado)


// simulacion de esta peticion de express
app.get('/users', (req, res) => {

})