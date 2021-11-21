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

class Avanzar {
    run(vehiculo) {
        switch (vehiculo.type) {
            case 'terrestre':
                console.log("a la tierra");
                break;
            case 'acuatico':
                console.log("al agua")
                break;
            case 'aereo':
                console.log("al aire");
                break;
            default:
                console.log("no tengo opciones para este tipo")
                break;
        }
    }
}

const auto = new Vehiculo("automovil", "terrestre")
const lancha = new Vehiculo("velero", "acuatico")
const avion = new Vehiculo("helicoptero", "aereo")
const hidroavion = new Vehiculo("figura", "airetierra")
const avanzar = new Avanzar() 
avanzar.run(auto);
avanzar.run(lancha);
avanzar.run(avion);
avanzar.run(hidroavion);