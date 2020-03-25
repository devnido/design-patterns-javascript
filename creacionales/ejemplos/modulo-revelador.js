// crear un modulo que permita guardar datos dentro de un patron 'modulo'
// NOTA: fetch no existe dentro de node.js asi que hay que eecutarlo en el explorador
const Users = (() => {
    const resource = '/users'
    return {
        listar: async() => {
            return await fetch(resource).then(x => x.json())
        },
        crear: async() => {
            return await fetch(resource, { type: 'POST', body: JSON.stringify(data) }).then(x => x.json())
        }
    }
})()