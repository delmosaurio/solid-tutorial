/**
 * GOOD!
 *
 * Permitir que las clases sean extendibles sin modificar la clase en si
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
    return 'soy un vehiculo';
  }

}

export class VehiculoTerrestre extends Vehiculo {
  constructor(name: string) {
    super(name, 'terrestre');
  }

  toString() {
    return 'a la tierra';
  }
}

export class VehiculoAcuatico extends Vehiculo {
  constructor(name: string) {
    super(name, 'acuatico');
  }

  toString() {
    return 'al agua';
  }
}

export class VehiculoAereo extends Vehiculo {
  constructor(name: string) {
    super(name, 'aereo');
  }

  toString() {
    return 'al aire';
  }
}

export class VehiculoAiretierra extends Vehiculo {
  constructor(name: string) {
    super(name, 'airetierra');
  }

  toString() {
    return 'al aire y a la tierra';
  }
}

const auto = new VehiculoTerrestre('automovil');
const lancha = new VehiculoAcuatico('velero');
const avion = new VehiculoAereo('helicoptero');
const hidroavion = new VehiculoAiretierra('figura');

console.log(auto.toString());
console.log(lancha.toString());
console.log(avion.toString());
console.log(hidroavion.toString());
