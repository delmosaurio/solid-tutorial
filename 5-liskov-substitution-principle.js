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

   get run() {
       return "puedo avanzar pero no se como"
   }

}

class Teletransportador extends Vehiculo {
    constructor(name) {
        super(name, "metafisico")
    }

    get run() {
        throw new Error("mi vehiculo no avanza");
    }
}

class Aereo extends Vehiculo {
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