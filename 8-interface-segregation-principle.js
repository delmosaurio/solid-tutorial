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

const VueloVertical = VV => class extends VV {
    get despegueVertical() {
            return "estoy despegando verticalmente"
        }
}

class Helicoptero extends VueloVertical(Aereo) {
    constructor() {
        super("helicoptero")
    }
}

class Avion extends Aereo {
    constructor() {
        super("avion")
    }
}

const avion = new Avion()
const helicoptero = new Helicoptero()


console.log(helicoptero.despegueVertical);
console.log(avion.despegueVertical);