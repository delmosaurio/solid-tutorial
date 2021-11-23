/**
 * WRONG!
 *
 * NO Permitir que las clases sean extendibles
 *
 */

export class Vehiculo {

  private _name: string;
  private _type: string;

  constructor(name: string, type: string) {
    this._name = name;
    this._type = type;
  }

  get name() {
    return this._name;
  }

  get type() {
    return this._type;
  }

  toString() {
    switch (this.type) {
    case 'terrestre':
      console.log('a la tierra');
      break;
    case 'acuatico':
      console.log('al agua');
      break;
    case 'aereo':
      console.log('al aire');
      break;
    default:
      console.log('no tengo opciones para este tipo');
      break;
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
