const user = new User()

const init = () => {
    user.on('login', userLoggedIn)
}

const userLoggedIn = () => {
    // usuario inicio sesion
}

app.init()

// en algun lugar de nuestr app
const login = () => {
    // logica de inicio de sesion



    // al final
    user.trigger('login')
}


login()