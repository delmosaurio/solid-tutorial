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

class Terrestre extends Vehiculo {
    constructor(name) {
        super(name, "terrestre")
    }
    get run() {
        return "a la tierra"
    }
}

class Acuatico extends Vehiculo {
    constructor(name) {
        super(name, "acuatico")
    }
    get run() {
        return "al agua"
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



const auto = new Terrestre("automovil")
const lancha = new Acuatico("velero")
const avion = new Aereo("helicoptero")
const hidroavion = new Vehiculo("hidroavion", "airetierra")
const avanzar = new Avanzar() 
avanzar.run(auto);
avanzar.run(lancha);
avanzar.run(avion);
avanzar.run(hidroavion);