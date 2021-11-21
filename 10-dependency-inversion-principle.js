class Vehiculo {
    #name = ""; 
    #type = ""

    constructor(name, type) {
        this.#name = name;
        this.#type = type;
    }

   get name() {
       return this.#name;
   }

   get type() {
       return this.#type;
   }

}

class TransporteFisico extends Vehiculo {
    constructor(name, type){
        super(name, type)
    }
    get run() {
        return "puedo avanzar pero no se como"
    }
}

class Aereo extends TransporteFisico {
    constructor(name){
        super(name, "aereo")
    }
    get run() {
        return "puedo avanzar pero no se como"
    }

    get volar() {
        return "al aire"
    }
}

class YpfProvider {
    cargandoCombustible() {
        console.log("esta cargando combustible en ypf");
    }
}

class ShellProvider {
    cargandoCombustible() {
        console.log("esta cargando combustible en shell");
    }
}

class CombustibleProvider {
    #provider;
    constructor(provider) {
        this.#provider = provider
    }

    cargarCombustible() {
        console.log("carganfo en: "+this.#provider.constructor.name)
    }
}

class Avion extends Aereo {
    constructor() {
        super("avion")
    }

    cargarCombustible(provider) {
        provider.cargarCombustible()
    }
}

const avion = new Avion()
avion.cargarCombustible(new CombustibleProvider(new YpfProvider))
avion.cargarCombustible(new CombustibleProvider(new ShellProvider))