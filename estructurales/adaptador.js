// cuando tenemos una clase o una implementacion de una libreria que construimos y sus metodos son problematicos y queremos actualizarlos
// entonces se actualiza el codigo de la libreria o clase

class Api {
    constructor() {
        this.operations = function(url, opts, verb) {
            switch (verb) {
                case 'get':
                    // return fetch
                case 'post':
                    // return fetch
                default:
                    return
            }
        }
    }
}

class Api2 {
    constructor() {
        this.get = function(url, opts) {
            // return axios.get ...
        }
        this.post = function(url, opts) {
            // return axios.post ...
        }
    }
}

class ApiAdapter {
    constructor() {

        const api2 = new Api2();

        this.operations = function(url, opts, verb) {

            switch (verb) {
                case 'get':
                    return api2.get(url, opts)
                case 'post':
                    return api2.post(url, opts)
                default:
                    return
            }

        }
    }
}

const api = new Api()
api.operations('www.google.cl', { q: 1 }, 'get')

const api2 = new Api2()
api2.get('www.google.cl', { q: 1 })

const adapter = new ApiAdapter()
api2.operations('www.google.cl', { q: 1 }, 'get')