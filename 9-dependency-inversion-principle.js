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

class Ypf {
    cargandoCombustible() {
        console.log("esta cargando combustible en ypf");
    }
}

class CombustibleProvider {
    #provider;
    constructor() {
        this.#provider = new Ypf()
    }

    cargarCombustible() {
        this.#provider.cargandoCombustible()
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
avion.cargarCombustible(new CombustibleProvider())