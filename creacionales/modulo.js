// objeto literal de javascrip
// tiene propiedades, metodos y objetos 
// se puede acceder a las propiedades a traves de los metodos y objetos

const modulo = {
    prop: 'my prop',
    config: {
        language: 'es',
        cache: true
    },
    setConfig: conf => {
        modulo.config = conf
    },
    isCacheEnabled: () => {
        console.log(modulo.config.cache) ? 'si' : 'no';

    }
}