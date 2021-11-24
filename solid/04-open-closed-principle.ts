/**
 * GOOD!
 *
 * Permitir que las clases sean extendibles sin modificar la clase en si
 *
 */
export class Vehiculo {

  constructor(
    public name: string,
    public type: string
  ) { }

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

const auto = new VehiculoTerrestre('automovil');
const lancha = new VehiculoAcuatico('velero');

console.log(auto.toString());
console.log(lancha.toString());
