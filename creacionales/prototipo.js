// distinto a constructor-prototipo
const dog = {
    race: 'killterrier',
    noSirve: () => {
        // las ()=>{} no tienen conexto de this por ende no se puede acceder a los metodos o propiedades que estan definidos a su mismo nivel
    },
    ladrar: function() {
        console.log(`Guau!, I am a ${this.race}`);
    }
}

const kiltro = Object.create(dog)
kiltro.ladrar()

// vacio por que las propiedades y os metodos se encuentran en el prototipo
console.log(kiltro);

// aqui alteramos el prototipo
kiltro.race = 'Super dog'

// por ende aqui muestra las propiedades
kiltro.ladrar()
console.log(kiltro);