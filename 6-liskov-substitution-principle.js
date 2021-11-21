//best
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
class TranspoteMetafisico extends Vehiculo {
    constructor(name, type) {
        super(name, type)
    }
}

class Teletransportador extends TranspoteMetafisico {
    constructor(name) {
        super(name, "metafisico")
    }
}

class Aereo extends TransporteFisico {
    constructor(name){
        super(name, "aereo")
    }
    get run() {
        return "al cielo"
    }
}

class Avanzar {
    run(vehiculo) {
            console.log(vehiculo.run); 
        }
    }

const avion = new Aereo("helicoptero")
const tele = new Teletransportador("barba-4000")
const avanza = new Avanzar()
avanza.run(avion)
avanza.run(tele)