/**
 * WRONG!
 *
 * Permitir que las clases sean extendibles
 * sin tener que modificar el padre
 *
 */

export class Vehiculo {

  constructor(
    public name: string,
    public type: string
  ) { }

  toString() {
    switch (this.type) {
    case 'terrestre':
      return 'a la tierra';
    case 'acuatico':
      return 'al agua';
    case 'aereo':
      return 'al aire';
    default:
      return 'no tengo opciones para este tipo';
    }
  }

}

const auto = new Vehiculo('automovil', 'terrestre');
const lancha = new Vehiculo('velero', 'acuatico');
const avion = new Vehiculo('helicoptero', 'aereo');
const hidroavion = new Vehiculo('figura', 'airetierra');

console.log(auto.toString());
console.log(lancha.toString());
console.log(avion.toString());
console.log(hidroavion.toString());
