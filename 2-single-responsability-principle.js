//Best
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

class DataBase {
    // Método principal
    constructor(vehicle) {}
    saveData() { console.log('estoy guardando un vehiculo');   }
    findData() { console.log('estoy buscando un vehiculo') }
    updateData() { console.log('estoy modificando un vehiculo') }
    deleteData(){ console.log('estoy borrando un vehiculo') }
}

const ferrari = new Vehiculo("automovil", "terrestre");

const dataBase = new DataBase(ferrari)
dataBase.saveData(ferrari)




