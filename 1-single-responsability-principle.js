//wrong
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

   saveDateDB(vehiculo) { 
       console.log('estoy guardando un vehiculo');
    }
}

const ferrari = new Vehiculo("automovil", "terrestre");
ferrari.saveDateDB(ferrari);


