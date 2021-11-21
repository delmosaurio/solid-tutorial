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

    get despegueVertical() {
        return "no estoy seguro de despegar verticalmente"
    }
}

class Helicoptero extends Aereo {
    constructor() {
        super("helicoptero")
    }

    get despegueVertical() {
        return "estoy despegando verticalmente"
    }
}

class Avion extends Aereo {
    constructor() {
        super("avion")
    }

    get despegueVertical() {
        return "No puedo despegar verticalmente"
    }
}

const avion = new Avion()
const helicoptero = new Helicoptero()


console.log(helicoptero.despegueVertical);
console.log(avion.despegueVertical);