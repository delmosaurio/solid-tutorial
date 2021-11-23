import { Vehiculo } from './02-single-responsability-principle';

/**
 * WRONG!
 *
 * NO mezclar funcionalidades
 *
 */

export interface IVehiculo {
    run(): void;
    volar(): void;
    despegueVertical(): void;
}

export class VehiculoTerrestre extends Vehiculo implements IVehiculo {

  constructor(name: string) {
    super(name, 'terrestre');
  }

  run() {
    return 'puedo avanzar';
  }

  volar() {
    throw new Error('No se volar');
  }

  despegueVertical() {
    throw new Error('No se despegar verticalmente');
  }
}

export class VehiculoAereo extends Vehiculo implements IVehiculo {

  constructor(name: string) {
    super(name, 'aereo');
  }

  run() {
    return 'puedo avanzar';
  }

  volar() {
    return 'puedo volar';
  }

  despegueVertical() {
    throw new Error('No se despegar verticalmente');
  }

}

const auto = new VehiculoTerrestre('auto');
const avion = new VehiculoAereo('avion');

console.log(auto.despegueVertical()); // Volver al futuro?
console.log(avion.volar());
console.log(avion.despegueVertical());

